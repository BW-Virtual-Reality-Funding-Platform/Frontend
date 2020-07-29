import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import "./Signup.css";
import Signing2 from "./Signing2.jpg";

const signupParts = {
  username: "",
  password: "",
};

const Register = (props) => {
  const history = useHistory();
  const [registerUser, setRegisterUser] = useState(signupParts);
  const [users, setUsers] = useState([]);

  const register = (e) => {
    e.preventDefault();
    axiosWithAuth();
    axios
      .post(
        "https://vr-lambdaschool.herokuapp.com/api/auth/register",
        registerUser
      )
      .then((res) => {
        console.log(res);
        setUsers([...users, res.data]);
      })
      .catch((err) => console.log({ err }));
  };

  const changeHandler = (ev) => {
    ev.persist();
    let value = ev.target.value;
    setRegisterUser({
      ...registerUser,
      [ev.target.name]: value,
    });
  };

  return (
    <div>

      <Image className="signup-img" src={Signing2}/>
      <h6></h6>
      <Form className="signup-form"  onSubmit={register}>
        <h1>Sign Up</h1>
        
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Register Username"
            value={registerUser.username}
            onChange={changeHandler}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Register Password"
            value={registerUser.password}
            onChange={changeHandler}
          ></Form.Control>
        </Form.Group>
        <Button variant='primary' type='submit'>Sign Up</Button>
      </Form>
    </div>
  );
};

export default Register;
