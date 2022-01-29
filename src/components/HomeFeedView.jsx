import React, { useState, useEffect } from 'react';
import RecipeTile from './RecipeTile.jsx'

const HomeFeedView = () => {

  return (
    <div id='homeView'>
      {/* <div id='navBar'></div> */}
      <div id='homeTopView'></div>
      <img src=''></img>
      <button>EXPLORE</button>
      <div id='homeBottomView'>
        <div id='title'>Recommend Recipes</div>
        <RecipeTile/>
      </div>
    </div>
  );
}

export default HomeFeedView;


