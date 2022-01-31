import React, { useState, useEffect } from 'react';
import RecipeTile from './RecipeTile.jsx'
import downArrow from '../../dist/resources/homeView/down-arrow.png';
import upArrow from '../../dist/resources/homeView/up-arrow.png';


const HomeFeedView = ({captureNavigation}) => {
  const [sortDisplay, updateSortDisplay] = useState(false);
  const [sortOption, updateSortOption] = useState(false);


  const handleSortDisplay = () => {
    let sortElement = document.getElementById('sortDropDown');
    if (sortDisplay === false) {
      updateSortDisplay(true);
      sortElement.style.display = 'block';
    } else {
      updateSortDisplay(false);
      sortElement.style.display = 'none';
    }
  }


  return (
    <div id="homeView">
      <div id="homeTopView">
      <div id="mainImg">
        <button onClick={(e) => captureNavigation('explore')} name="explore" id="exploreButton">EXPLORE</button>
      </div>
      </div>
      <div id="homeBottomView">
        <div id="titleHomeBottomView">
          <div id="title">Recommend Recipes</div>
          <div id="sort">
            <div id="sortByText">Sort:</div>
            <h4 id="sortDescription" onClick={handleSortDisplay}>Most Popular</h4>
            {sortDisplay === false && <img id="sortArrow"  onClick={handleSortDisplay} src={downArrow}></img>}
            {sortDisplay === true && <img id="sortArrow"  onClick={handleSortDisplay} src={upArrow}></img>}
              <div id="sortDropDown">
                <p id="sortDropDownPopular">Most Popular</p>
                <p id="sortDropDownMeal">Meal Type</p>
              </div>
          </div>
        </div>
        <div id="receipeBox">
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


