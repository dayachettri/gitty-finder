import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

import { redirect } from 'react-router-dom';

const GithubContext = createContext();

function GithubProvider({ children }) {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Shared values
  const values = {
    ...state,
    dispatch,
  };

  return (
    <GithubContext.Provider value={values}>{children}</GithubContext.Provider>
  );
}

export default GithubContext;
export { GithubProvider };
