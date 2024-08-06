import React, { useState } from 'react';
import axios from 'axios';
import { Form, Alert, Button, Col, Row, Image, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/styles.css';
import { useSetCurrentUser } from '../contexts/CurrentUserContext';
import NavBar from '../components/NavBar';

function SignUpForm() {
  const setCurrentUser = useSetCurrentUser();
  const [signUpData, setSignUpData] = useState({
    username: '',
    email: '',
    password1: '',
    password2: ''
  });
  const { username, email, password1, password2 } = signUpData;
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post('/dj-rest-auth/registration/', signUpData);
      setCurrentUser(data.user);
      navigate('/');
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <>
      <NavBar />
      <Row className="auth-container">
        <Col className="my-auto p-0 p-md-2" md={6}>
          <Container className="content p-4">
            <h1 className="header">Sign Up</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="username">
                <Form.Label className="d-none">Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  name="username"
                  className="input"
                  value={username}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.username?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                  {message}
                </Alert>
              ))}
              <Form.Group controlId="email">
                <Form.Label className="d-none">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input"
                  value={email}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.email?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                  {message}
                </Alert>
              ))}
              <Form.Group controlId="password1">
                <Form.Label className="d-none">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password1"
                  className="input"
                  value={password1}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.password1?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                  {message}
                </Alert>
              ))}
              <Form.Group controlId="password2">
                <Form.Label className="d-none">Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  name="password2"
                  className="input"
                  value={password2}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.password2?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                  {message}
                </Alert>
              ))}
              <Button className="btn-gradient" type="submit">
                Sign Up
              </Button>
              {errors.non_field_errors?.map((message, idx) => (
                <Alert key={idx} variant="warning" className="mt-3">
                  {message}
                </Alert>
              ))}
            </Form>
          </Container>
          <Container className="mt-3 content">
            <Link className="link" to="/signin">
              Already have an account? <span>Sign in now!</span>
            </Link>
          </Container>
        </Col>
        <Col md={6} className="my-auto d-none d-md-block p-2 sign-up-col">
          <Image className="filler-image" src="https://codeinstitute.s3.amazonaws.com/AdvancedReact/hero.jpg" />
        </Col>
      </Row>
    </>
  );
}

export default SignUpForm;
