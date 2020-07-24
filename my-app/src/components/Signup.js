import React, { useState, useEffect } from "react";
import {axiosWithAuth} from './utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

const initialForm = {
  username: '',
  password: ''
}

const Signup = () => {

  const [credentials, setCredentials] = useState(initialForm)
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory()

    const handleChange = e => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
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
          .post('/api/auth/login', credentials)
          .then(res => {
            console.log({res});
            localStorage.setItem('token', res.data.payload);
            setLoggedIn(true);
            history.push('/browse')
          })
          .catch(err => {
            console.log(err);
          });
      };

  return (
    <>
      <h1>Your here!</h1>
      <form onSubmit={handleSubmit}>
              <input
              type='text'
              name='username'
              value={credentials.username}
              onChange={handleChange}
              />
              <input
              type='password'
              name='password'
              value={credentials.password}
              onChange={handleChange}
              />
              <button>Log in</button>
          </form>
    </>
  );
};

export default Signup;