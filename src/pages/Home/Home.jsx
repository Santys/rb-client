import BooksContainer from '../../components/BooksContainer/BooksContainer';
import Searchbar from '../../components/Searchbar/Searchbar';
import { useEffect, useState } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import { getTopBooks } from '../../services/books';
import BooksCarousel from '../../components/BooksCarousel/BooksCarousel';
import Quote from '../../components/Quote/Quote';

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
    <Row className="mt-4 pb-5">
      <Col xs={12}>
        <Searchbar />
      </Col>
      <Col xs={12}>
        <p className="h1 text-dark-green">Top 10 books</p>
        <hr />
        {isLoading ? (
          <Spinner animation="border" />
        ) : (
          <>
            {/* <BooksContainer books={topBooks} /> */}
            <BooksCarousel books={topBooks} />
          </>
        )}
      </Col>
      <Col xs={12} className="mt-5">
        <Quote />
      </Col>
    </Row>
  );
};

export default Home;
