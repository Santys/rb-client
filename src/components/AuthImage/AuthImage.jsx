import { Carousel, Image } from 'react-bootstrap';
import './AuthImage.css';

const AuthImage = () => {
  return (
    <>
      <div className="maintxt">
        <Image
          className="auth-image"
          fluid={true}
          rounded={true}
          src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
        <span className="overlay-text">
          <i className="bi bi-book text-light icon-size"></i>
        </span>
      </div>
    </>
  );
};

export default AuthImage;
