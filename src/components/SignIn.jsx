import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoginForm from './LoginForm.jsx';

const SignIn = ({ captureUser, handleClose }) => {

  const adminUser = {
    email: 'admin@admin.com',
    password: 'admin123'
  }
  const [user, setUser] = useState({name: '', email: ''});
  const [error, setError] = useState('');

  const Login = details => {
    console.log(details);
    if (details.email === adminUser.email && details.password === adminUser.password) {
      console.log('Logged in');
      setUser({
        name: details.name,
        email: details.email
      });
      captureUser(details);
    } else {
      console.error('Details do not match!')
      setError('Details do not match!')
    }



  }
  // const Login = details => {

  //   let userObj = {};
  //   axios.post('/users/login', userObj)
  //     .then((response) => {
  //       console.log(response)
  //     })
  //     .catch((error) => {
  //       console.error('user login error:', error);
  //     })
  // }
  const SignUp = details => {

    let newUserObj = {};
    axios.post('/users/new', newUserObj)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.error('new user sign up error:', error);
      })
  }

  const Logout = () => {
    setUser({
      name: '',
      email: ''
    })
  }

  // const Logout = () => {

  //   let logoutObj = {};
  //   axios.put('/users/logout', logoutObj)
  //     .then((response) => {
  //       console.log(response)
  //     })
  //     .catch((error) => {
  //       console.error('user logout error:', error);
  //     })
  // }
  return (
    <div className="signinview">
      <div className="signindiv">
        {(user.email === "") ? (
          <LoginForm Login={Login} handleClose={handleClose} SignUp={SignUp} error={error}/>
        ): ''}
      </div>
    </div>
  )
}

export default SignIn;