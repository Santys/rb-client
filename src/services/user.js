import axios from 'axios';

const user = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/user`,
  timeout: 1000,
  headers: {},
});

const getUserBooks = (userId) => {
  return user.get(`/${userId}`);
};

export { getUserBooks };
