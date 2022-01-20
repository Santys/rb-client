import { Col, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import AuthImage from '../../components/AuthImage/AuthImage';
import AuthForm from '../../components/Form/Form';
import { signup } from '../../services/auth';

const Signup = () => {
  const navigate = useNavigate();

  const signupUser = (username, password) => {
    signup(username, password)
      .then((response) => {
        navigate('/login');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Row>
        <Col className="mt-xl-5 p-xl-5 pb-5 shadow">
          <Row>
            <Col xs={12} xl={6} className="p-0">
              <AuthImage />
            </Col>
            <Col xs={12} xl={6}>
              <Row className="justify-content-center mt-4">
                <Col xs={12} xl={8}>
                  <p className="element-to-hide h1 text-dark-green">
                    <i className="bi bi-book"></i> MyBookApp
                  </p>
                  <div className="mt-xl-3">
                    <AuthForm action={'Sign up'} handleAuth={signupUser} />
                  </div>
                </Col>
                <Col xs={12} xl={8} className="mt-3">
                  <p className="text-center mb-0">
                    Don't an have account?{' '}
                    <Link className="text-decoration-none color-text" to={'/login'}>
                      Log in here
                    </Link>
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Signup;
