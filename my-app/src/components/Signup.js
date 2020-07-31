import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "./Signup.css";
import Signing3 from "./Signing3.jpg";

const signupParts = {
  username: "",
  password: "",
};

const Register = (props) => {
  const history = useHistory();
  const [registerUser, setRegisterUser] = useState(signupParts);
  const [user, setUser] = useState([]);

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
        setUser([...user, res.data]);
        history.push(`/login`);
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
      <Image className="signup-img" src={Signing3} />
      <h6>
        <span>
          Photo by{" "}
          <a href="https://unsplash.com/@judebeck?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Jude Beck
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/s/photos/pen?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Unsplash
          </a>
        </span>
      </h6>
      <Form className="signup-form" onSubmit={register}>
        <h1>Sign Up</h1>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Create Username"
            name="username"
            value={registerUser.username}
            onChange={changeHandler}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Create Password"
            name="password"
            value={registerUser.password}
            onChange={changeHandler}
          ></Form.Control>
        </Form.Group>
        <Button variant="primary" className="submit-button" type="submit">Register</Button>
      </Form>
    </div>

    // <div>
    //   <h1>Sign Up</h1>
    //   <form onSubmit={register} className="formSignUp">
    //     <ul>
    //       <li>
    //         <label htmlFor="Name">Username:</label>
    //         <input
    //           placeholder="Create Username"
    //           type="text"
    //           name="username"
    //           value={registerUser.username}
    //           onChange={changeHandler}
    //         />
    //       </li>
    //     </ul>
    //     <ul>
    //       <li>
    //         <label htmlFor="Name">Password:</label>
    //         <input
    //           placeholder="Create Password"
    //           type="password"
    //           name="password"
    //           value={registerUser.password}
    //           onChange={changeHandler}
    //         />
    //       </li>
    //     </ul>
    //     <button className="submit-button" type="submit">
    //       Register
    //     </button>
    //   </form>
    // </div>
  );
};

export default Register;

// import { connect } from "react-redux";
// import { PostRegister } from "../actions/index";

//   const register = e => {
//     e.preventDefault();
//     PostRegister(registerUser);
//     history.push('/login');
//     setRegisterUser({

//         "username": "",
//         "password": ""

//     });
// }

// export default connect(null, { PostRegister: PostRegister })(Register);
