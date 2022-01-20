import booksExample from '../books_example.json';
import bookExample from '../book_example.json';
import axios from 'axios';

const book = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/book`,
  timeout: 1000,
  headers: {},
});

const getTopBooks = () => {
  return book.get('/get-top-books');
};

const getBooksSearched = (term, filter) => {
  return book.get(`/search-books`, { params: { term, filter } });
};

const getBookById = (bookId, idUser) => {
  return book.get(`/search-book-by-id/${bookId}`, { params: { idUser } });
};

export { getTopBooks, getBooksSearched, getBookById };
