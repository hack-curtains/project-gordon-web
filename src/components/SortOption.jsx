import React, { useState, useEffect } from 'react';
import axios from 'axios';
import downArrow from '../../dist/resources/HomeView/down-arrow.png';
import upArrow from '../../dist/resources/HomeView/up-arrow.png';
import { API_ADDR } from '../config';
import RecipeTile from './RecipeTile.jsx';


const SortOption = ({ captureNavigation, captureRecipeId, favorites, captureFavorites, liked, captureLikes  }) => {
  const [sortDisplay, updateSortDisplay] = useState(false);
  const [sortOption, updateSortOption] = useState('mostPopular');
  const [sortedData, updateSortedData] = useState([]);

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

  const handleCheapest = () => {
    axios.get(`${API_ADDR}/recipes?sort=price&direction=asc`)
      .then ((res) => {
        updateSortedData(res.data.rows);
      })
  }

  useEffect (() => {
    if (sortOption === 'mostPopular') {
      let selectedSortOption = document.getElementById(sortOption);
      selectedSortOption.style.color = 'white';
      selectedSortOption.style.backgroundColor = '#E86D4D';

      handleMostPopularRecipe();
    } else if (sortOption === 'highPrice') {
      let selectedSortOption = document.getElementById(sortOption);
      selectedSortOption.style.color = 'white';
      selectedSortOption.style.backgroundColor = '#E86D4D';

      handleMostExpensive();
    } else if (sortOption === 'lowPrice') {
      let selectedSortOption = document.getElementById(sortOption);
      selectedSortOption.style.color = 'white';
      selectedSortOption.style.backgroundColor = '#E86D4D';

      handleCheapest();
    }
  }, [sortOption])

  return (
    <div id='sortedList'>
      <div className="sortContainer">
        <div id="sort">
          <div id="sortByText">Sort:</div>
          {sortOption === 'mostPopular' ? <h4 id="sortDescription" onClick={handleSortDisplay}>Most Popular</h4> : ''}
          {sortOption === 'highPrice' ? <h4 id="sortDescription" onClick={handleSortDisplay}>Price: High-Low</h4> : ''}
          {sortOption === 'lowPrice' ? <h4 id="sortDescription" onClick={handleSortDisplay}>Price: Low-High</h4> : ''}
          {sortDisplay === false ?
          <img id="sortArrow"  onClick={handleSortDisplay} src={downArrow}></img> :
          <img id="sortArrow"  onClick={handleSortDisplay} src={upArrow}></img>}
            <div id="sortDropDown">
              <p onClick={handleSortOption} id="mostPopular">Most Popular</p>
              <p onClick={handleSortOption} id="highPrice">Price: High-Low</p>
              <p onClick={handleSortOption} id="lowPrice">Price: Low-High</p>
            </div>
        </div>
      </div>
      <div id="receipeBox">
      {sortedData[0] ? (
        sortedData.map((recipe) => {
          return <RecipeTile key={recipe.id} recipe={recipe} captureNavigation={captureNavigation} captureRecipeId={captureRecipeId} favorites={favorites} captureFavorites={captureFavorites} liked={liked} captureLikes={captureLikes}/>
        })
      ) : ''}
      </div>
    </div>
  )
};

export default SortOption;