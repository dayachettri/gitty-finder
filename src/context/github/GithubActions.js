import axios from 'axios';
import { REACT_APP_GITHUB_URL } from '../../../env';
import { REACT_APP_GITHUB_TOKEN } from '../../../env';

const GITHUB_URL = REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `token${GITHUB_TOKEN}` },
});

// Get search results
const searchUsers = async text => {
  const params = new URLSearchParams({
    q: text,
  });

  const response = await github.get(`/search/users?${params}`);
  console.log(response);
  return response.data.items;
};

// Get user and repos

const getUserAndRepos = async login => {
  const [user, repos] = await Promise.all([
    github.get(`users/${login}`),
    github.get(`/users/${login}/repos`),
  ]);

  return { user: user.data, repos: repos.data };
};

// Clear users from state
const clearUsers = () => dispatch({ type: 'CLEAR_USERS' });

// Set loading
const setLoading = () => {
  dispatch({ type: 'SET_LOADING' });
};

export { searchUsers, getUserAndRepos, clearUsers, setLoading };
