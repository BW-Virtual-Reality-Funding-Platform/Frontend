import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import "./LoginForm.css"

export default function LoginForm() {
  return (
    <div>
      <ReactBootstrap.Form>
        <Form className='login-form'>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" placeholder="Enter Username" />
            <Form.Text className="text-muted">
              
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
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
