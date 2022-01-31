import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileView = ({ captureNavigation }) => {

  const [user, setUser] = useState({name: 'Winston Pantelakos', email: 'winstonspantelakos@gmail.com'});

  return (
    <>
      <div className="profileuser">{user.name}</div>
      <div className="profileemail">{user.email}</div>
      <button className="profilefavorites" name="favorites" onClick={e => captureNavigation(e) }>Favorites</button>
      <button className="profileSignOut">Sign Out</button>
    </>
  )
};

export default ProfileView;