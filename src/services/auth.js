import axios from 'axios';

const auth = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/auth`,
  timeout: 1000,
  headers: {},
});

const signup = (username, password) => {
  const credentials = {
    username,
    password,
  };
  return auth.post('/signup', { data: credentials });
};

const login = (username, password) => {
  const credentials = {
    username,
    password,
  };
  return auth.post('/login', { data: credentials });
};

const verify = (token) => {
  return auth.get('/verify', { headers: { Authorization: `Bearer ${token}` } });
};

export { signup, login, verify };
