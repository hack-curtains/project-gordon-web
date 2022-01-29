import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NavMenu = ({ captureUser }) => {
  const [user, setUser] = useState({name: '', email: ''});
  const [error, setError] = useState('');

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

export default NavMenu;