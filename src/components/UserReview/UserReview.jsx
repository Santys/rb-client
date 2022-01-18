import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import ReviewsContainer from '../ReviewsContainer/ReviewsContainer';

const UserReview = ({ userReview, createNewUserReview, updateUserReview, deleteUserReview }) => {
  const [review, setReview] = useState({
    content: '',
    rate: 0,
  });
  const [selected, setSelected] = useState(false);
  const [modifyActive, setModifyActive] = useState(false);

  const { content, rate } = review;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    createNewUserReview(content, rate);
  };

  const handleModify = (e) => {
    e.preventDefault();
    console.log(e);
    setModifyActive(true);
    updateUserReview(content, rate);
  };

  return (
    <Row className="justify-content-center">
      {userReview ? (
        <>
          <Col xs={12}>
            <Row>
              <Col xs={6} xl={10} className="text-start">
                <p className="m-0">My activity</p>
              </Col>
              <Col xs={6} xl={2} className="text-end">
                <Button className="button-link" onClick={(e) => handleModify(e)}>
                  <i className="bi bi-pencil"></i>
                  <span className="element-to-hide"> Modify</span>
                </Button>
                <Button className="button-link" onClick={() => deleteUserReview(userReview.id)}>
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
        </>
      ) : (
        <>
          {selected ? (
            <>
              <Form onSubmit={handleReviewSubmit}>
                <Form.Group className="mb-3" controlId="formBasicContent">
                  <Form.Control
                    type="text"
                    name="content"
                    value={content}
                    onChange={handleInputChange}
                    placeholder="Your review..."
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicRate">
                  <Form.Control type="number" name="rate" value={rate} onChange={handleInputChange} placeholder="0" />
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button type="submit" className="button-sand">
                    Create new review
                  </Button>
                </div>
              </Form>
            </>
          ) : (
            <>
              <Col xs={6}>
                <Button className="button-sand" onClick={() => setSelected(true)}>
                  New review
                </Button>
              </Col>
            </>
          )}
        </>
      )}
    </Row>
  );
};

export default UserReview;
