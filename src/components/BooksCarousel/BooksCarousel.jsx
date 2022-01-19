import { Carousel, Col, Row } from 'react-bootstrap';
import Card1 from '../Card1/Card1';
import { useEffect, useState } from 'react';
import useIsMobile from '../../hooks/useIsMobile';

const BooksCarousel = ({ books }) => {
  const [carouselBooks, setCarouselBooks] = useState([]);
  const isMobile = useIsMobile();

  useEffect(() => {
    let numberOfItems = 5;
    if (isMobile) {
      numberOfItems = 2;
    }
    let result = [];
    for (let i = 0; i < books.length; i++) {
      if (i % numberOfItems === 0) result.push([]);
      result[Math.floor(i / numberOfItems)].push(books[i]);
    }
    setCarouselBooks(result);
  }, [isMobile, books]);

  return (
    <>
      <Row className="">
        <Col xs={12} className="px-0">
          <Carousel variant="dark">
            {carouselBooks.map((bookList, index) => {
              return (
                <Carousel.Item key={index} className="p-5 pt-2">
                  <Row className="justify-content-center">
                    {bookList.map((book) => {
                      return (
                        <Col key={book.id} xs={6} xl={2}>
                          <Card1 book={book} />
                        </Col>
                      );
                    })}
                  </Row>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Col>
      </Row>
    </>
  );
};

export default BooksCarousel;
