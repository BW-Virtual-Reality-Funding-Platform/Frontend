import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "./LoginForm.css";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Log from "./Log.jpg";

export default function LoginForm() {
  const [loginState, setLoginState] = useState({
    username: "",
    password: "",
  });

  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginState);

    axiosWithAuth()
      .post("/auth/login", loginState)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        setLoggedIn(true);
        history.push("/browse2");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <Image className="log-img" src={Log} />
      <h6>
        <span>
          Photo by{" "}
          <a href="https://unsplash.com/@markusspiske?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Markus Spiske
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/s/photos/log?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Unsplash
          </a>
        </span>
      </h6>
      <Form className="login-form" onSubmit={handleSubmit}>
        <h1>Log-in</h1>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            name="username"
            value={loginState.username}
            onChange={handleChange}
          />

          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            name="password"
            value={loginState.password}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Log-in
        </Button>
      </Form>
    </div>
  );
}