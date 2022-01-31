import React, { useState, useEffect } from 'react';
import axios from 'axios';
import profile90 from '../../dist/resources/ProfileView/icons8-user-90.png';

const ProfileView = ({ captureNavigation }) => {

  const [user, setUser] = useState({name: 'Winston Pantelakos', email: 'winstonspantelakos@gmail.com'});

  return (
    <div className="profileview">
      <div className="profileviewimage"><img src={profile90}></img></div>
      <div className="profileuser">{user.name}</div>
      <div className="profileemail"><strong>Email: </strong>{user.email}</div>
      <button className="profilefavorites" name="favorites" onClick={e => captureNavigation(ee.target.getAttribute('name')) }>Favorites</button>
      <button className="profileSignOut">Sign Out</button>
    </div>
  )
};

export default ProfileView;