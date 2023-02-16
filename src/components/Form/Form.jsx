import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const AuthForm = ({ action, handleAuth }) => {
  const [authForm, setAuthForm] = useState({
    username: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState('');

  const { username, password } = authForm;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAuthForm({ ...authForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === '' || password.trim() === '') {
      setFormError('Please enter a valid username and password.');
      return;
    }
    handleAuth(username, password);
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
          aria-label="Username"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          type={showPassword ? 'text' : 'password'}
          name="password"
          value={password}
          onChange={handleInputChange}
          placeholder="Password"
          aria-label="Password"
          required
        />
        <Form.Text className="text-danger">{formError}</Form.Text>
        <Form.Check type="checkbox" label="Show password" onChange={() => setShowPassword(!showPassword)} />
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
