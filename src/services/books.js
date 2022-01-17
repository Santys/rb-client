import booksExample from '../books_example.json';
import bookExample from '../book_example.json';

const getTopBooks = () => {
  return Promise.resolve({ status: 200, data: booksExample });
};

const getBooksSearched = (termSearch, filter) => {
  return Promise.resolve({ status: 200, data: booksExample });
};

const getBookById = (id) => {
  return Promise.resolve({ status: 200, data: bookExample });
};

export { getTopBooks, getBooksSearched, getBookById };
