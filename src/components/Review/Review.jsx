import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const Review = ({ review }) => {
  const { username, content, rate } = review;
  const [showFullReview, setShowFullReview] = useState(false);
  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>{username}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Rate: {rate}</Card.Subtitle>
        <Card.Text className="text-start">
          {content.length > 140 &&
            (showFullReview ? (
              <>
                <span>{content}</span>
                <Button className="button-link" onClick={() => setShowFullReview(!showFullReview)}>
                  <i className="bi bi-chevron-up"></i> View less
                </Button>
              </>
            ) : (
              <>
                <span>
                  {content.substring(0, 150)}
                  {'...'}
                </span>
                <Button className="button-link" onClick={() => setShowFullReview(!showFullReview)}>
                  <i className="bi bi-chevron-down"></i> View more
                </Button>
              </>
            ))}
          {content.length < 140 && <span>{content}</span>}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Review;
