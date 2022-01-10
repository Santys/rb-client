import { Card } from 'react-bootstrap';

const Card1 = ({ book }) => {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={book.cover} />
      <Card.Body>
        <Card.Title className="text-truncate">{book.title}</Card.Title>
        <Card.Text className="text-truncate">{book.author}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Card1;
