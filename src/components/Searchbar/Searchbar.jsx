import { useState } from 'react';
import { Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Searchbar = ({ filters }) => {
  const [searchValue, setSearchValue] = useState('');
  const [searchParameter, setSearchParameter] = useState('all');

  return (
    <Row>
      <Col>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search..."
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <InputGroup.Text id="basic-addon1" className="button-sand">
            <Link className="text-dark opacity-75" to={`/search?s=${searchValue}&filter=${searchParameter}`}>
              <i className="bi bi-search"></i>
            </Link>
          </InputGroup.Text>
          {filters && (
            <InputGroup className="mb-3">
              <Form.Check
                inline
                label="All"
                type="radio"
                id="all"
                name="group1"
                checked={searchParameter === 'all'}
                onChange={(e) => setSearchParameter('all')}
              />
              <Form.Check
                inline
                label="Title"
                type="radio"
                id="title"
                name="group1"
                onChange={(e) => setSearchParameter('intitle')}
              />
              <Form.Check
                inline
                label="Author"
                type="radio"
                id="author"
                name="group1"
                onChange={(e) => setSearchParameter('inauthor')}
              />
            </InputGroup>
          )}
        </InputGroup>
      </Col>
    </Row>
  );
};

export default Searchbar;
