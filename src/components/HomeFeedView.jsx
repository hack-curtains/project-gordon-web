import React, { useState, useEffect } from 'react';
import RecipeTile from './RecipeTile.jsx'
import arrow from '../../dist/resources/arrow.png';


const HomeFeedView = () => {

  const handleSortForMouseEnter = () => {
    let sortElement = document.getElementById('sortDropDown');
    sortElement.style.display = 'block';
  }

  const handleSortForMouseLeave = () => {
    let sortElement = document.getElementById('sortDropDown');
    sortElement.style.display = 'none';
  }



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
            <h4 onMouseLeave={handleSortForMouseLeave} onMouseEnter={handleSortForMouseEnter}>Sort By
              <div id='sortDropDown'>
                <p id='sortDropDownPopular'>Most Popular</p>
                <p id='sortDropDownMeal'>Meal Type</p>
              </div>
            </h4>
            <img id='sortArrow' src={arrow} onMouseLeave={handleSortForMouseLeave} onMouseEnter={handleSortForMouseEnter}></img>
          </div>
        </div>
        <div id='receipeBox'>
          <RecipeTile/>
          <RecipeTile/>
          <RecipeTile/>
          <RecipeTile/>
          <RecipeTile/>
          <RecipeTile/>
        </div>
      </div>
    </div>
  );
}

export default HomeFeedView;


