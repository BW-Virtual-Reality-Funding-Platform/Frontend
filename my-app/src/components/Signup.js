
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
    const [users, setUsers] = useState([]);

    const register = e => {
      e.preventDefault();
      axiosWithAuth()
      axios
            .post("https://vr-lambdaschool.herokuapp.com/api/auth/register", registerUser)
            .then(res => {
                console.log(res);
                setUsers([...users, res.data])
             
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
        <form onSubmit={register}>
          <input
            type="text"
            name="username"
            value={registerUser.username}
            onChange={changeHandler}
          />
          <input
            type="password"
            name="password"
            value={registerUser.password}
            onChange={changeHandler}
          />
          <button>Sign Up</button>
        </form>
      </div>
    );
  }

export default Register