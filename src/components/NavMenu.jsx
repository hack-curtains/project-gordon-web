import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NavMenu = ({ captureNavigation, closeNav }) => {

  return (
      <div className="navmenu" onMouseLeave={e => { closeNav(); } }>
        <div className="navmenuitem" onClick={e => {captureNavigation('home'); closeNav(); } }>Home</div>
        <div className="navmenuitem" onClick={e => { captureNavigation('explore'); closeNav(); } }>Explore</div>
        <div className="navmenuitem" onClick={e => { captureNavigation('profile'); closeNav(); }  }>Profile</div>
        <div className="navmenuitem" onClick={e => { captureNavigation('favorites'); closeNav(); } }>Favorites</div>
      </div>
  )
}

export default NavMenu;