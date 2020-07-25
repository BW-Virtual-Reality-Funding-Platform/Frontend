import React, { useState, useEffect } from "react";
import * as ReactBootstrap from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import * as yup from "yup";
import axios from "axios";
import "./LoginForm.css";

const formSchema = yup.object().shape({
  username: yup.string().required("Name is a required field."),
  password: yup.string(),
});

export default function LoginForm() {
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [loginState, setLoginState] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  const [post, setPost] = useState([]);
  useEffect(() => {
    formSchema.isValid(loginState).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [loginState]);
  const formSubmit = (e) => {
    e.preventDefault();
    axios.post().then((res) => {
      setPost(res.data);
      console.log("success", post);
      setLoginState({
        username: "",
        password: "",
      });
    });
  };
  const validateChange = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });
  };
  const inputChange = (e) => {
    e.persist();
    const newFormData = {
      ...loginState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    };

    validateChange(e);
    setLoginState(newFormData);
  };
  return (
    <div>
      <ReactBootstrap.Form>
        <Form className="login-form">
          <h1>Login</h1>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Username"
              name="username"
              value={loginState.username}
              onChange={inputChange}
            />
            {errors.username.length > 0 ? (
              <p className="error">{errors.name}</p>
            ) : null}
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="text"
              placeholder="Password"
              name="password"
              value={loginState.password}
              onChange={inputChange}
            />
            {errors.password.length > 0 ? (
              <p className="error">{errors.name}</p>
            ) : null}
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
