import React, { useState } from 'react';
import axios from 'axios';
import { Form, Alert, Button, Col, Row, Image, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/styles.css';
import { useSetCurrentUser } from '../contexts/CurrentUserContext';
import NavBar from '../components/NavBar';

function SignInForm() {
  const setCurrentUser = useSetCurrentUser();
  const [signInData, setSignInData] = useState({
    username: '',
    password: '',
  });
  const { username, password } = signInData;
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post('/dj-rest-auth/login/', signInData);
      setCurrentUser(data.user);
      navigate('/');
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <NavBar />
      <Row className="auth-container">
        <Col className="my-auto p-0 p-md-2" md={6}>
          <Container className="content p-4">
            <h1 className="header">Sign in</h1>
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

              <Form.Group controlId="password">
                <Form.Label className="d-none">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="input"
                  value={password}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.password?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                  {message}
                </Alert>
              ))}
              <Button className="btn-gradient" type="submit">
                Sign in
              </Button>
              {errors.non_field_errors?.map((message, idx) => (
                <Alert key={idx} variant="warning" className="mt-3">
                  {message}
                </Alert>
              ))}
            </Form>
          </Container>
          <Container className="mt-3 content">
            <Link className="link" to="/signup">
              Don't have an account? <span>Sign up now!</span>
            </Link>
          </Container>
        </Col>
        <Col
          md={6}
          className="my-auto d-none d-md-block p-2 sign-in-col"
        >
          <Image
            className="filler-image"
            src="https://codeinstitute.s3.amazonaws.com/AdvancedReact/hero.jpg"
          />
        </Col>
      </Row>
    </>
  );
}

export default SignInForm;
