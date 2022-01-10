import { Card } from 'react-bootstrap';

const Card1 = ({ book }) => {
  return (
    <Card>
      <Card.Img variant="top" src={book.cover} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>{book.author}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Card1;
