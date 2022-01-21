import { Button, Col, Image, Row, Spinner } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import ReviewsContainer from '../../components/ReviewsContainer/ReviewsContainer';
import UserReview from '../../components/UserReview/UserReview';
import { useParams } from 'react-router-dom';
import { getBookById } from '../../services/books';
import { createNewReview, deleteReview, modifyReview } from '../../services/review';
import { AuthContext } from '../../context/auth.context';

const Book = () => {
  const [book, setBook] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const { bookId } = useParams();

  const { user } = useContext(AuthContext);

  useEffect(() => {
    getBookById(bookId, user._id)
      .then((response) => {
        setBook(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setBook({});
        setIsLoading(false);
      });
  }, [bookId, user._id]);

  // Manage user reviews
  const createNewUserReview = (content, rate) => {
    setIsLoading(true);
    createNewReview(content, rate, user, bookId)
      .then((response) => {
        getBookById(bookId, user._id)
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
    modifyReview(content, rate, reviewId, user._id)
      .then((response) => {
        getBookById(bookId, user._id)
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
    setIsLoading(true);
    deleteReview(reviewId, user._id)
      .then((response) => {
        getBookById(bookId, user._id)
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
              {book.cover && (
                <Col>
                  <Image className="shadow-lg" fluid={true} rounded={true} src={book.cover}></Image>
                </Col>
              )}
            </Col>
            <Col xs={12} xl={10} className="mt-4 mt-xl-0">
              {book.title && (
                <Col>
                  <p className="h5">{book.title}</p>
                </Col>
              )}
              {book.authors &&
                book.authors.map((author) => {
                  return (
                    <Col key={author}>
                      <p className="fw-bold text-secondary">{author}</p>
                    </Col>
                  );
                })}
              <Col>
                <Row>
                  {(book.userReview.content || book.otherUsersReview.length.length !== 0) && (
                    <Col xs={6} xl={1}>
                      <p className="fw-bold text-dark-green">
                        <i className="bi bi-pencil"></i>{' '}
                        {book.otherUsersReview.length + (book.userReview.content ? 1 : 0)}
                      </p>
                    </Col>
                  )}
                  {book.rating && (
                    <Col xs={6} xl={11}>
                      <p className="fw-bold text-dark-green">
                        <i className="bi bi-trophy"></i> {Math.round(book.rating * 100) / 100}
                      </p>
                    </Col>
                  )}
                </Row>
              </Col>
              {book.description && (
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
              )}
            </Col>
            <Col xs={12} className="mt-3">
              <UserReview
                userReview={book.userReview}
                createNewUserReview={createNewUserReview}
                updateUserReview={updateUserReview}
                deleteUserReview={deleteUserReview}
              />
            </Col>
            {book.otherUsersReview && (
              <Col xs={12} className="mt-3">
                <p className="text-start mb-1">Community reviews</p>
                <hr className="mt-0" />
                <ReviewsContainer reviews={book.otherUsersReview} />
              </Col>
            )}
          </Row>
        </>
      )}
    </div>
  );
};

export default Book;
