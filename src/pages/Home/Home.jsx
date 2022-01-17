import BooksContainer from '../../components/BooksContainer/BooksContainer';
import Searchbar from '../../components/Searchbar/Searchbar';
import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { getTopBooks } from '../../services/books';

const Home = () => {
  const [topBooks, setTopBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTopBooks()
      .then((response) => {
        setTopBooks(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setTopBooks([]);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="mt-5 pb-5">
      <Searchbar />
      <p className="h1 text-dark-green">Top 10 books</p>
      <hr />
      {isLoading ? <Spinner animation="border" /> : <BooksContainer books={topBooks} />}
    </div>
  );
};

export default Home;
