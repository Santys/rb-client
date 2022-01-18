import { Button, Col, Image, Row, Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import ReviewsContainer from '../../components/ReviewsContainer/ReviewsContainer';
import UserReview from '../../components/UserReview/UserReview';
import { useParams } from 'react-router-dom';
import { getBookById } from '../../services/books';
import { createNewReview, deleteReview, modifyReview } from '../../services/review';
import user from '../../user.json';

const Book = () => {
  const [book, setBook] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const { bookId } = useParams();

  const user = 'Sand';
  useEffect(() => {
    getBookById(bookId)
      .then((response) => {
        setBook(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setBook({});
        setIsLoading(false);
      });
  }, [bookId]);

  // Manage user reviews
  const createNewUserReview = (content, rate) => {
    setIsLoading(true);
    createNewReview(content, rate, user)
      .then((response) => {
        getBookById(bookId)
          .then((response) => {
            setBook(response.data);
            setIsLoading(false);
          })
          .catch((err) => {
            setBook({});
            setIsLoading(false);
          });
      })
      .catch((err) => {
        setIsLoading(false);
        console.log('Error while creating a new review: ' + err);
      });
  };

  const updateUserReview = (content, rate, reviewId) => {
    setIsLoading(true);
    modifyReview(content, rate, reviewId)
      .then((response) => {
        getBookById(bookId)
          .then((response) => {
            setBook(response.data);
            setIsLoading(false);
          })
          .catch((err) => {
            setBook({});
            setIsLoading(false);
          });
      })
      .catch((err) => {
        setIsLoading(false);
        console.log('Error while modifying review: ' + err);
      });
  };

  const deleteUserReview = (reviewId) => {
    console.log(reviewId);
    setIsLoading(true);
    deleteReview(reviewId)
      .then((response) => {
        getBookById(bookId)
          .then((response) => {
            setBook(response.data);
            setIsLoading(false);
          })
          .catch((err) => {
            setBook({});
            setIsLoading(false);
          });
      })
      .catch((err) => {
        setIsLoading(false);
        console.log('Error while deleting review: ' + err);
      });
  };

  return (
    <div className="mt-3 p-3 p-xl-5 shadow">
      {isLoading ? (
        <Spinner animation="border" />
      ) : (
        <>
          <Row className="text-xl-start">
            <Col xs={12} xl={2}>
              <Col>
                <Image className="shadow-lg" fluid={true} rounded={true} src={book.cover}></Image>
              </Col>
            </Col>
            <Col xs={12} xl={10} className="mt-4 mt-xl-0">
              <Col>
                <p className="h5">{book.title}</p>
              </Col>
              <Col>
                <p className="fw-bold text-secondary">{book.author}</p>
              </Col>
              <Col>
                <Row>
                  <Col xs={6} xl={1}>
                    <p className="fw-bold text-dark-green">
                      <i className="bi bi-pencil"></i> {book.otherUsersReviews.length + (book.userReview && 1)}
                    </p>
                  </Col>
                  <Col xs={6} xl={11}>
                    <p className="fw-bold text-dark-green">
                      <i className="bi bi-trophy"></i> {book.rate}
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col className="text-start">
                {book.description.length > 150 &&
                  (showFullDescription ? (
                    <>
                      <span>{book.description} </span>
                      <Button className="button-link" onClick={() => setShowFullDescription(!showFullDescription)}>
                        <i className="bi bi-chevron-up"></i> View less
                      </Button>
                    </>
                  ) : (
                    <>
                      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {book.description.substring(0, 150)}
                        {'...'}
                      </span>
                      <Button className="button-link" onClick={() => setShowFullDescription(!showFullDescription)}>
                        <i className="bi bi-chevron-down"></i> View more
                      </Button>
                    </>
                  ))}
                {book.description.length < 150 && <span>{book.description} </span>}
              </Col>
            </Col>
            <Col xs={12} className="mt-3">
              <UserReview
                userReview={book.userReview}
                createNewUserReview={createNewUserReview}
                updateUserReview={updateUserReview}
                deleteUserReview={deleteUserReview}
              />
            </Col>
            <Col xs={12} className="mt-3">
              <p className="text-start mb-1">Community reviews</p>
              <hr className="mt-0" />
              <ReviewsContainer reviews={book.otherUsersReviews} />
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};

export default Book;
