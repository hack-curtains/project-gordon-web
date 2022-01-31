import React, { useState, useEffect } from 'react';
import axios from 'axios';
import heart from '../../dist/resources/BottomNav/heart.png';
import home from '../../dist/resources/BottomNav/home.png';
import pantry from '../../dist/resources/BottomNav/pantry.png';
import user from '../../dist/resources/BottomNav/user.png';

const BottomNav = ({ captureNavigation }) => {


  return (
      <div className="bottomnav">
        <div className="bottomnavitem" name="explore" onClick={e => captureNavigation('explore')}><img src={pantry} name="explore" onClick={e => captureNavigation('explore')}></img></div>

        <div className="bottomnavitem" name="home" onClick={e => captureNavigation('home')}><img src={home}   name="home" onClick={e => captureNavigation('home')}></img></div>

        <div className="bottomnavitem" name="favorites" onClick={e => captureNavigation('favorites')}><img src={heart} name="favorites" onClick={e => captureNavigation('favorites')}></img></div>

        <div className="bottomnavitem" name="profile" onClick={e => captureNavigation('profile')}><img src={user} name="profile" onClick={e => captureNavigation('profile')}></img></div>
      </div>
  )
}

export default BottomNav;