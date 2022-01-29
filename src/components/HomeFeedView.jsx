import React, { useState, useEffect } from 'react';
import RecipeTile from './RecipeTile.jsx'
import arrow from '../../dist/resources/arrow.png';



const HomeFeedView = () => {

  return (
    <div id='homeView'>
      <div id='homeTopView'>
      <div id='mainImg'>
        <button id='exploreButton'>EXPLORE</button>
      </div>
      </div>
      <div id='homeBottomView'>
        <div id='title-homeBottomView'>
          <div id='title'>Recommend Recipes</div>
          <div id='sort'>
            <h4>Sort By</h4>
            <img id='sortArrow' src={arrow}></img>
          </div>
        </div>
        <RecipeTile/>
      </div>
    </div>
  );
}

export default HomeFeedView;


