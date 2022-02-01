import React, { useState, useEffect } from 'react';
import axios from 'axios';
import profile90 from '../../dist/resources/ProfileView/icons8-user-90.png';

const ProfileView = ({ captureNavigation, openLogin }) => {

  const [user, setUser] = useState({name: 'Winston Pantelakos', email: 'winstonspantelakos@gmail.com'});
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <div className="profileview">
      <div className="profileviewimage"><img src={profile90}></img></div>
      <div className="profileuser">{user.name}</div>
      <div className="profileemail"><strong>Email: </strong>{user.email}</div>
      <button className="profilefavorites" name="favorites" onClick={e => captureNavigation('favorites') }>Favorites</button>
      {showSignIn === false ? (<button onClick={e => { setShowSignIn(true); setUser({ name: '', email: ''}); }} className="profileSignOut">Sign Out</button>) : (<button onClick={e => openLogin()} className="profileSignIn">Sign In</button>) }

    </div>
  )
};

export default ProfileView;