import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeTile from './RecipeTile.jsx'
import downArrow from '../../dist/resources/homeView/down-arrow.png';
import upArrow from '../../dist/resources/homeView/up-arrow.png';
import { API_ADDR } from '../config';
import one from '../../dist/resources/homeView/one.png';
import two from '../../dist/resources/homeView/2.png';
import three from '../../dist/resources/homeView/3.png';


const HomeFeedView = ({captureNavigation}) => {
  const [sortDisplay, updateSortDisplay] = useState(false);
  const [sortOption, updateSortOption] = useState('mostPopular');
  const [sortedData, updateSortedData] = useState([]);
  const [randomBackground, updaterandomBackground] = useState('');


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

  const handleSortOption = (e) => {
    let selectedSortOption = document.getElementById(sortOption);
    selectedSortOption.style.color = 'black';
    selectedSortOption.style.backgroundColor = '#f9f9f9';

    updateSortOption(e.target.id);
    let sortElement = document.getElementById('sortDropDown');
    sortElement.style.display = 'none';
    handleSortDisplay();
  }

  const handleMostPopularRecipe = () => {
    axios.get(`${API_ADDR}/recipes?sort=likes&direction=desc`)
      .then ((res) => {
        updateSortedData(res.data.rows);
      })
  }

  const handleMostExpensive = () => {
    axios.get(`${API_ADDR}/recipes?sort=price&direction=desc`)
      .then ((res) => {
        updateSortedData(res.data.rows);
      })
  }

  useEffect (() => {
    if (sortOption === 'mostPopular') {
      let selectedSortOption = document.getElementById(sortOption);
      selectedSortOption.style.color = '#2C90AA';
      selectedSortOption.style.backgroundColor = '#EBF6FF';

      handleMostPopularRecipe();
    } else if (sortOption === 'price') {
      let selectedSortOption = document.getElementById(sortOption);
      selectedSortOption.style.color = '#2C90AA';
      selectedSortOption.style.backgroundColor = '#EBF6FF';

      handleMostExpensive();
    }
  }, [sortOption])

  useEffect (() => {
    updaterandomBackground([one,two,three][Math.floor(Math.random()*3)]);
  }, [randomBackground])


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
          <div id="title">Recommend Recipes</div>
          <div id="sort">
            <div id="sortByText">Sort:</div>
            {sortOption === 'mostPopular' && <h4 id="sortDescription" onClick={handleSortDisplay}>Most Popular</h4>}
            {sortOption === 'price' && <h4 id="sortDescription" onClick={handleSortDisplay}>Price: High-Low</h4>}
            {sortDisplay === false && <img id="sortArrow"  onClick={handleSortDisplay} src={downArrow}></img>}
            {sortDisplay === true && <img id="sortArrow"  onClick={handleSortDisplay} src={upArrow}></img>}
              <div id="sortDropDown">
                <p onClick={handleSortOption} id="mostPopular">Most Popular</p>
                <p onClick={handleSortOption} id="price">Price: High-Low</p>
              </div>
          </div>
        </div>
        <div id="receipeBox">
          {sortedData[0] && (
            sortedData.map((recipe) => {
              return <RecipeTile key={recipe.id} recipe={recipe} captureNavigation={captureNavigation}/>
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default HomeFeedView;


