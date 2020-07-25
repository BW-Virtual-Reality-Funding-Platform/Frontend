import React, { useState, useEffect } from "react";
import * as ReactBootstrap from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import "./LoginForm.css";
import {axiosWithAuth} from './utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

export default function LoginForm() {
  const [loginState, setLoginState] = useState({
    username: "",
    password: "",
  });
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory()

  const handleChange = e => {
    setLoginState({...loginState, [e.target.name]: e.target.value})
}

useEffect(() => {
  if(localStorage.getItem('token')) {
    setLoggedIn(true) 
  } else {
    setLoggedIn(false)
  }
}, [])


const handleSubmit = e => {
    e.preventDefault()

    axiosWithAuth()
      .post('/api/auth/login', loginState)
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.payload);
        setLoggedIn(true);
        history.push('/browse')
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
  <div>
      <ReactBootstrap.Form>
        <Form className="login-form">
          <h1>Login</h1>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="Username"
              placeholder="Enter Username"
              name="Username"
              value={loginState.username}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={loginState.password}/>
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </ReactBootstrap.Form>
    </div>
  );
}


//ignore or delete but this is a working form to test authentication
//Authentication not working yet
{/* <div>
<h1>Your Here!</h1>
<form onSubmit={handleSubmit}>
        <input
        type='text'
        name='username'
        value={loginState.username}
        onChange={handleChange}
        />
        <input
        type='password'
        name='password'
        value={loginState.password}
        onChange={handleChange}
        />
        <button>Log in</button>
    </form>
</div> */}