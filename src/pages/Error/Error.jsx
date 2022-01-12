import { Col, Row } from 'react-bootstrap';

import './Error.css';

const Error = () => {
  return (
    <div className="d-block w-100 mt-5 error404 text-center">
      <Row>
        <Col>
          <p className="h1">Error 404</p>
        </Col>
      </Row>
    </div>
  );
};

export default Error;
