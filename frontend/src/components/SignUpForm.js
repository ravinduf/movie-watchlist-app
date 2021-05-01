import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const schema = yup.object().shape({
  username: yup
    .string()
    .required("your name is required"),
  email: yup
    .string()
    .email()
    .required("your email is required"),
  password: yup
    .string()
    .required("password is required"),
  confirmPassword: yup
    .string()
    .required("confirm password is required")
    .when("password", {
      is: password => (password && password.length > 0 ? true : false),
      then: yup.string().oneOf([yup.ref("password")], "Password doesn't match")
    })
});

const SignUpForm = () => {

  const history = useHistory();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async data => {
    const {confirmPassword, ...userData} = data;
    
    // const userData = { username: data.username, email: data.email, password: data.password }
    try {
      await axios.post(`${process.env.REACT_APP_API_URL_SIGNUP}`, userData);
      history.push('/');
      history.push('/user/sign-in');
    } catch (error) {
      console.log(error.response.data)
      if(error.response.data.password){
        alert(`${error.response.data.password}`)
      }
    }
  }
  return (
    <Container className="form" onSubmit={handleSubmit(onSubmit)}>
      <h3 className="form-header">SignUp</h3>

      <Form>

        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control {...register("username")} type="text"/>
          <p className="form-error" >{errors.username?.message}</p>
        </Form.Group>
        
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control {...register("email")} type="email" />
          <p className="form-error" >{errors.email?.message}</p>
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control {...register("password")} type="password"/>
          <p className="form-error" >{errors.password?.message}</p>
        </Form.Group>

        <Form.Group>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control {...register("confirmPassword")} type="password"/>
          <p className="form-error" >{errors.confirmPassword?.message}</p>
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      
      </Form>

    </Container>
  )
}

export default SignUpForm
