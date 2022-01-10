import { useState } from 'react';
import { Col, FormControl, InputGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Searchbar = () => {
  const [searchValue, setSearchValue] = useState('');
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
          <InputGroup.Text id="basic-addon1">
            <Link className="text-dark" to={`/search/?s=${searchValue}`}>
              <i className="bi bi-search"></i>
            </Link>
          </InputGroup.Text>
        </InputGroup>
      </Col>
    </Row>
  );
};

export default Searchbar;
