
import {axiosWithAuth} from '../utils/axiosWithAuth';
import { useHistory } from "react-router-dom";
import axios from "axios";
import React, { useState} from 'react'


const signupParts = {
  username: '',
  password: '',

};



const Register = (props) => {
    const history = useHistory();
    const [registerUser, setRegisterUser] = useState(signupParts)
    const [user, setUser] = useState([]);

    const register = e => {
      e.preventDefault();
      axiosWithAuth()
      axios
            .post("https://vr-lambdaschool.herokuapp.com/api/auth/register", registerUser)
            .then(res => {
                console.log(res);
                setUser([...user, res.data])
                history.push(`/login`);
             
              })
              .catch(err => console.log({ err }));
          };
    

    const changeHandler = ev => {
      ev.persist();
      let value = ev.target.value;
      setRegisterUser({
        ...registerUser,
        [ev.target.name]: value
      });
    };

    return (
      <div>
        <h1>Sign Up</h1>
     <form onSubmit={register} className="formSignUp">
<ul>
<li>
    <label htmlFor="Name">Username:</label>
    <input
  placeholder="Create Username"
  type="text"
  name="username"
  value={registerUser.username}
  onChange={changeHandler}
/>
    </li>
    </ul>
    <ul>
    <li>
      <label htmlFor="Name">Password:</label>
      <input
  placeholder="Create Password"
  type="password"
  name="password"
  value={registerUser.password}
  onChange={changeHandler}
/>
    </li>
    </ul>
    <button className='submit-button'
    type="submit">Register</button>

</form> 
      </div>
    );
  }

export default Register






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