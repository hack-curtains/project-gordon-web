import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeTile from './RecipeTile.jsx';
import SortOption from './SortOption.jsx';
import { API_ADDR } from '../config';
import imageOne from '../../dist/resources/HomeFeedView/1.png';
import imageTwo from '../../dist/resources/HomeFeedView/2.png';
import imageThree from '../../dist/resources/HomeFeedView/3.png';
import imageFour from '../../dist/resources/HomeFeedView/4.png';


const HomeFeedView = ({captureNavigation, captureRecipeId, favorites, captureFavorites, liked, captureLikes}) => {
  const [sortedData, updateSortedData] = useState([]);
  const [randomBackground, updaterandomBackground] = useState('');

  useEffect (() => {
    updaterandomBackground([imageOne,imageTwo,imageThree,imageFour][Math.floor(Math.random()*4)]);
  }, [])


  return (
    <div id="homeView">
      <div id="homeTopView">
      <div id="homeTopViewMain">
        <img src={randomBackground} id='mainImg'></img>
        <button onClick={(e) => captureNavigation('explore')} name="explore" id="exploreButton">EXPLORE</button>
      </div>
      </div>
      <div id="homeBottomView">
        <div id="titleHomeBottomView">
          <div id="title">Recommended Recipes</div>
          <SortOption captureNavigation={captureNavigation} captureRecipeId={captureRecipeId} favorites={favorites} captureFavorites={captureFavorites} liked={liked} captureLikes={captureLikes}/>
        </div>
      </div>
    </div>
  );
}

export default HomeFeedView;