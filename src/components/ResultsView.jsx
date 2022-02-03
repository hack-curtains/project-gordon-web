import React, { useState, useEffect } from 'react';
import axios from 'axios';
import downArrow from '../../dist/resources/homeView/down-arrow.png';
import upArrow from '../../dist/resources/homeView/up-arrow.png';
import RecipeTile from './RecipeTile.jsx';

const ResultsView = ({ results, mobile, captureNavigation, captureRecipeId, favorites, captureFavorites, liked, captureLikes }) => {


  const [sortDisplay, updateSortDisplay] = useState(false);
  const [sortOption, updateSortOption] = useState('mostPopular');

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

  return (
    <div className="resultsContainer">
      <h1 className="unselectable">Recipes</h1>
      <div className="inputBar">
        <input id="searchResults" placeholder="Find..."></input>
        <button>Search</button>
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
      <div className={`results ${mobile ? '' : 'shadowBox'}`}>
        {results.map((recipe, i) => (
          <RecipeTile
            key={i}
            recipe={recipe}
            favorites={favorites}
            captureFavorites={captureFavorites}
            captureNavigation={captureNavigation}
            captureRecipeId={captureRecipeId}
            liked={liked}
            captureLikes={captureLikes}
          />
        ))}
      </div>
    </div>
  )
}

export default ResultsView;