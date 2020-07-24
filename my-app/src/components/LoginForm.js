import React, { useState, useEffect } from "react";
import * as ReactBootstrap from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import "./LoginForm.css";

export default function LoginForm() {
  const [loginState, setLoginState] = useState({
    username: "",
    password: "",
  });
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
