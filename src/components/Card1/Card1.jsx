import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Card1 = ({ book }) => {
  return (
    <Link className="text-decoration-none text-dark" to={`/${book.id}`}>
      <Card className="h-100">
        <Card.Img variant="top" src={book.cover} />
        <Card.Body>
          <Card.Title className="text-truncate">{book.title}</Card.Title>
          <Card.Text className="text-truncate">{book.author}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default Card1;
