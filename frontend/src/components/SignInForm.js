import React, {useContext, useEffect} from 'react'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { UserContext } from '../contexts/UserContext';

const schema = yup.object().shape({
  username: yup
    .string()
    .required("your name is required"),
  password: yup
    .string()
    .required("password is required"),
  });


const SignInForm = () => {
  console.log(localStorage.getItem('token'))
  useEffect(() => {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
  })
  
  const {userLogin} = useContext(UserContext);

  const history = useHistory();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data) => {
    const {confirmPassword, ...userData} = data;

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL_LOGIN}/`, userData);
      console.log(response);
      userLogin(userData.username, response.data.auth_token);
      history.push('/');
    } catch (error) {
      console.error(error);
    }
  }

  return (
      <Container className="form" onSubmit={handleSubmit(onSubmit)}>
      <h3 className="form-header">SignUp</h3>
      <br/>
      <Form>

        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control {...register("username")} type="text"/>
          <p className="form-error" >{errors.username?.message}</p>
        </Form.Group>
        
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control {...register("password")} type="password"/>
          <p className="form-error" >{errors.password?.message}</p>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      
      </Form>

    </Container>
  )
}

export default SignInForm
