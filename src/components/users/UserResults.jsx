import { useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import UserItem from './UserItem';
import Spinner from '../Spinner';

function UserResults() {
  const { users, loading } = useContext(GithubContext);

  const renderedUsers = users.map(user => {
    return <UserItem key={user.id} user={user} />;
  });

  if (loading) return <Spinner />;
  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {renderedUsers}
    </div>
  );
}

export default UserResults;
