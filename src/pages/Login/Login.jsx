import { useContext } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import AuthImage from '../../components/AuthImage/AuthImage';
import AuthForm from '../../components/Form/Form';
import { AuthContext } from '../../context/auth.context';
import { login } from '../../services/auth';

import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const { logInUser } = useContext(AuthContext);

  const loginUser = (username, password) => {
    login(username, password)
      .then((response) => {
        logInUser(response.data.authToken);
        navigate('/');
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
                    <AuthForm action={'Log in'} handleAuth={loginUser} />
                  </div>
                </Col>
                <Col xs={12} xl={8} className="mt-3">
                  <div className="login-or">
                    <hr className="hr-or" />
                    <span className="span-or d-flex justify-content-center">or</span>
                  </div>
                </Col>
                <Col xs={12} xl={8} className="mt-3">
                  <div className="d-grid gap-2">
                    <Button className="button-sand">Try demo</Button>
                  </div>
                </Col>
                <Col xs={12} xl={8} className="mt-3">
                  <p className="text-center">
                    Don't an have account?{' '}
                    <Link className="text-decoration-none color-text" to={'/signup'}>
                      Sign up here
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

export default Login;
