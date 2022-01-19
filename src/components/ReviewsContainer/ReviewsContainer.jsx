import { useState } from 'react';
import { Col, Pagination, Row } from 'react-bootstrap';
import Review from '../Review/Review';

const ReviewsContainer = ({ reviews }) => {
  const itemsInPage = 3;
  const [currentReviews, setCurrentReviews] = useState(reviews.slice(0, itemsInPage));
  const [activePage, setActivePage] = useState(1);

  let items = [];
  const numberPages = Math.ceil(reviews.length / itemsInPage);

  for (let number = 1; number <= numberPages; number++) {
    items.push(
      <Pagination.Item key={number} active={number === activePage} onClick={() => handlePagination(number)}>
        {number}
      </Pagination.Item>,
    );
  }

  const handlePagination = (number) => {
    if (number < 1 || number > numberPages) return;
    setActivePage(number);
    const initialItem = itemsInPage * number - itemsInPage;
    const finalItem = itemsInPage * number;
    setCurrentReviews(reviews.slice(initialItem, finalItem));
  };

  return (
    <Row>
      {currentReviews.map((review) => {
        return (
          <Col key={review.id} xs={12} className="mt-1">
            <Review review={review} />
          </Col>
        );
      })}
      {reviews.length > itemsInPage && (
        <Col className="mt-2">
          <Pagination>
            {activePage > 1 && <Pagination.Prev onClick={() => handlePagination(activePage - 1)} />}
            <Pagination>{items}</Pagination>
            {activePage < numberPages && <Pagination.Next onClick={() => handlePagination(activePage + 1)} />}
          </Pagination>
        </Col>
      )}
    </Row>
  );
};

export default ReviewsContainer;
