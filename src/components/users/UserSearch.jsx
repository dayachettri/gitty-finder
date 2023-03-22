import { useState, useContext } from 'react';
import AlertContext from '../../context/alert/AlertContext';
import GithubContext from '../../context/github/GithubContext';
import { searchUsers } from '../../context/github/GithubActions';
import Alert from '../Alert';

function UserSearch() {
  const [text, setText] = useState('');

  const { users, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = e => setText(e.target.value);

  const handleSubmit = async e => {
    e.preventDefault();

    if (text.trim() === '') {
      setAlert('Please enter something', 'error');
    } else {
      dispatch({ type: 'SET_LOADING' });
      const users = await searchUsers(text);
      dispatch({ type: 'GET_USERS', payload: users });

      setText('');
    }
  };

  return (
    <>
      <Alert />
      <div onSubmit={handleSubmit} className="w-[600px] mx-auto">
        <div>
          <form>
            <div className="form-control">
              <div className="relative">
                <input
                  value={text}
                  onChange={handleChange}
                  type="text"
                  className="w-full pr-40 bg-gray-200 input input-lg text-black"
                  placeholder="Search"
                />
                <button
                  type="submit"
                  className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg "
                >
                  Go
                </button>
              </div>
            </div>
          </form>
        </div>
        <div>
          {users.length > 0 && (
            <button
              onClick={() => dispatch({ type: 'CLEAR_USERS' })}
              className="btn btn-ghost btn-lg mx-auto block my-5 text-white"
            >
              Clear Results
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default UserSearch;
