import { Col, Row } from 'react-bootstrap';
import Review from '../Review/Review';

const ReviewsContainer = ({ reviews }) => {
  return (
    <Row>
      {reviews.map((review) => {
        return (
          <Col key={review.id} xs={12} className="mt-1">
            <Review review={review} />
          </Col>
        );
      })}
    </Row>
  );
};

export default ReviewsContainer;
