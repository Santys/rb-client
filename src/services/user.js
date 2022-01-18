import booksExample from '../books_example.json';

const getUserBooks = (userId) => {
  return Promise.resolve({ status: 200, data: booksExample });
};

export { getUserBooks };
