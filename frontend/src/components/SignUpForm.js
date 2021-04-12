import React from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SignUpForm = () => {
  return (
    <Container className="form">
      <h3 className="form-header">SignUp</h3>
      <Form>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control type="email"/>
        </Form.Group>
        
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email"/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default SignUpForm
