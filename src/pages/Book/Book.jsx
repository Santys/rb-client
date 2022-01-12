import BooksContainer from '../../components/BooksContainer/BooksContainer';
import bookExample from '../../book_example.json';
import user from '../../user.json';
import { Button, Col, Image, Row } from 'react-bootstrap';
import { useState } from 'react';

const Book = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <div className="mt-3 p-3 p-xl-5 shadow">
      <Row className="text-xl-start">
        <Col xs={12} xl={2}>
          <Col>
            <Image fluid={true} rounded={true} src={bookExample.cover}></Image>
          </Col>
        </Col>
        <Col xs={12} xl={10}>
          <Col>
            <p className="h5">{bookExample.title}</p>
          </Col>
          <Col>
            <p>{bookExample.author}</p>
          </Col>
          <Col>
            <p>
              Reviews: {bookExample.reviews.length} Rate: {bookExample.rate}
            </p>
          </Col>
          <Col className="text-start">
            {bookExample.description.length > 150 &&
              (showFullDescription ? (
                <>
                  <span>{bookExample.description} </span>
                  <Button className="button-link" onClick={() => setShowFullDescription(!showFullDescription)}>
                    <i class="bi bi-chevron-up"></i> View less
                  </Button>
                </>
              ) : (
                <>
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {bookExample.description.substring(0, 150)}
                    {'...'}
                  </span>
                  <Button className="button-link" onClick={() => setShowFullDescription(!showFullDescription)}>
                    <i class="bi bi-chevron-down"></i> View more
                  </Button>
                </>
              ))}
            {bookExample.description.length < 150 && <span>{bookExample.description} </span>}
          </Col>
          <Col>{/* <p>{bookExample.author}</p> */}</Col>
        </Col>
      </Row>
    </div>
  );
};

export default Book;
