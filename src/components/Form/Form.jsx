import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const AuthForm = ({ action, handleSubmit }) => {
  const [authForm, setAuthForm] = useState({
    username: '',
    password: '',
  });

  const { username, password } = authForm;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAuthForm({ ...authForm, [name]: value });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="text"
          name="username"
          value={username}
          onChange={handleInputChange}
          placeholder="Username"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          type="password"
          name="password"
          value={password}
          onChange={handleInputChange}
          placeholder="Password"
        />
      </Form.Group>
      <div className="d-grid gap-2">
        <Button type="submit" className="button-sand">
          {action}
        </Button>
      </div>
    </Form>
  );
};

export default AuthForm;
