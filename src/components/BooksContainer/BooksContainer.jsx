import { Col, Container, Row } from 'react-bootstrap';
import Card1 from '../Card1/Card1';

const BooksContainer = ({ books }) => {
  return (
    <Row>
      {books.map((book) => {
        return (
          <Col xs={6} xl={2} key={book.id} className="mt-3">
            <Card1 book={book} />
          </Col>
        );
      })}
    </Row>
  );
};

export default BooksContainer;
