import { Button, Col, Row } from 'react-bootstrap';
import ReviewsContainer from '../ReviewsContainer/ReviewsContainer';

const UserReview = ({ userReview }) => {
  return (
    <Row>
      <Col xs={12}>
        <Row>
          <Col xs={6} xl={10} className="text-start">
            <p className="m-0">My activity</p>
          </Col>
          <Col xs={6} xl={2} className="text-end">
            <Button className="button-link">
              <i className="bi bi-pencil"></i>
              <span className="element-to-hide"> Modify</span>
            </Button>
            <Button className="button-link">
              <i className="bi bi-trash"></i>
              <span className="element-to-hide"> Delete</span>
            </Button>
          </Col>
        </Row>
        <hr className="mt-0" />
      </Col>
      <Col xs={12} xl={12}>
        <ReviewsContainer reviews={[userReview]} />
      </Col>
      {/* <Col xs={12} xl={1} className="mt-2">
        <Row className="h-100 align-items-center">
          <Col xs={6} xl={12} className="p-0">
            <Button className="bg-green">Modify</Button>
          </Col>
          <Col xs={6} xl={12} className="p-0">
            <Button className="bg-dark-blue">Delete</Button>
          </Col>
        </Row>
      </Col> */}
    </Row>
  );
};

export default UserReview;
