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
    updateUserReview(content, rate, userReview._id);
  };

  const activeModify = () => {
    setReview({ content: userReview.content, rate: userReview.rate });
    setModifyActive(true);
  };
  return (
    <Row className="justify-content-center">
      {modifyActive ? (
        <>
          <Form onSubmit={handleModify}>
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
                Modify review
              </Button>
            </div>
          </Form>
        </>
      ) : (
        <>
          {userReview.content ? (
            <>
              <Col xs={12}>
                <Row>
                  <Col xs={6} xl={9} className="text-start">
                    <p className="m-0">My activity</p>
                  </Col>
                  <Col xs={6} xl={3} className="text-end">
                    <Button className="button-link" onClick={() => activeModify()}>
                      <i className="bi bi-pencil"></i>
                      <span className="element-to-hide"> Modify</span>
                    </Button>
                    <Button className="button-link" onClick={() => deleteUserReview(userReview._id)}>
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
                      <Form.Control
                        type="number"
                        name="rate"
                        value={rate}
                        onChange={handleInputChange}
                        placeholder="0"
                      />
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
        </>
      )}
    </Row>
  );
};

export default UserReview;
