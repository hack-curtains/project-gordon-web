import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoginForm from './LoginForm.jsx';

const signInURL = 'http://ec2-3-225-116-189.compute-1.amazonaws.com:3000';

const SignIn = ({ captureUser, handleClose, login, signUp, changedLoggedIn }) => {

  const [user, setUser] = useState({name: '', email: ''});
  // const [error, setError] = useState('');

  // const Login = details => {
  //   console.log(details);
  //   if (details.email === adminUser.email && details.password === adminUser.password) {
  //     console.log('Logged in');
  //     setUser({
  //       name: details.name,
  //       email: details.email
  //     });
  //     captureUser(details);
  //   } else {
  //     console.error('Details do not match!')
  //     setError('Details do not match!')
  //   }



  // }
  // const Login = details => {

  //   let userObj = {
  //     email: details.email,
  //     password: details.password
  //   };

  //   let options = {

  //     headers: {
  //       'Access-Control-Allow-Origin': '*'
  //     }
  //   }
  //   axios.post(`${signInURL}/users/login`, userObj, options)
  //     .then((response) => {
  //       console.log(response)
  //     })
  //     .catch((error) => {
  //       console.error('user login error:', error);
  //     })
  // }
  // const signUp = details => {

  //   let newUserObj = {
  //     username: details.name,
  //     email: details.email,
  //     password: details.password
  //   };

  //   let options = {

  //     headers: {
  //       'Access-Control-Allow-Origin': '*'
  //     }
  //   }
  //   axios.post(`${signInURL}/users/new`, newUserObj, options)
  //     .then((response) => {
  //       console.log(response)
  //     })
  //     .catch((error) => {
  //       console.error('new user sign up error:', error);
  //     })
  // }

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
          <LoginForm login={login} changedLoggedIn={changedLoggedIn} handleClose={handleClose} signUp={signUp}/>
        ): ''}
      </div>
    </div>
  )
}

export default SignIn;