import React, { useState, useEffect } from 'react';
import axios from 'axios';
import heart from '../../dist/resources/BottomNav/heart.png';
import home from '../../dist/resources/BottomNav/home.png';
import pantry from '../../dist/resources/BottomNav/pantry.png';
import user from '../../dist/resources/BottomNav/user.png';
import star from '../../dist/resources/BottomNav/star.png';
import search from '../../dist/resources/BottomNav/search.png';

const BottomNav = ({ captureNavigation }) => {


  // for adding ingredients - name pantry
  // for searching results - name search
  return (
      <div className="bottomnav">
        <div className="bottomnavitem" name="pantry" onClick={e => captureNavigation('pantry')}><img src={pantry} name="pantry" onClick={e => captureNavigation('pantry')}></img></div>

        <div className="bottomnavitem" name="search" onClick={e => captureNavigation('search')}><img src={search}onClick={e => captureNavigation('search')}></img></div>

        <div className="bottomnavitem" name="home" onClick={e => captureNavigation('home')}><img src={home}   name="home" onClick={e => captureNavigation('home')}></img></div>

        <div className="bottomnavitem" name="favorites" onClick={e => captureNavigation('favorites')}><img src={star} name="favorites" onClick={e => captureNavigation('favorites')}></img></div>

        <div className="bottomnavitem" name="profile" onClick={e => captureNavigation('profile')}><img src={user} name="profile" onClick={e => captureNavigation('profile')}></img></div>
      </div>
  )
}

export default BottomNav;