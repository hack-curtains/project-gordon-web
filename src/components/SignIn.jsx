import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoginForm from './LoginForm.jsx';

const SignIn = ({ captureUser }) => {

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

  const Logout = () => {
    setUser({
      name: '',
      email: ''
    })
  }

  return (
    <>
      {(user.email !== "") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error}/>
      )}
    </>
  )
}

export default SignIn;