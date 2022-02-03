import React, { useState, useEffect } from 'react';
import axios from 'axios';
import downArrow from '../../dist/resources/homeView/down-arrow.png';
import upArrow from '../../dist/resources/homeView/up-arrow.png';
import RecipeTile from './RecipeTile.jsx';
import PantryItem from './PantryItem.jsx';

const ResultsView = ({ ingredients, results, mobile, usePantry, searchTerms, captureNavigation, captureRecipeId, favorites,
                       captureFavorites, liked, captureLikes, sortOption, captureSortOption, setSearchTerm }) => {


  const [sortDisplay, setSortDisplay] = useState(false);
  const [term, setTerm] = useState('');

  const handleSortDisplay = () => {
    let sortElement = document.getElementById('sortDropDown');
    if (sortDisplay === false) {
      setSortDisplay(true);
      sortElement.style.display = 'block';
    } else {
      setSortDisplay(false);
      sortElement.style.display = 'none';
    }
  }

  const handleSortOption = (e) => {
    let selectedSortOption = document.getElementById(sortOption);
    selectedSortOption.style.color = 'black';
    selectedSortOption.style.backgroundColor = '#f9f9f9';

    captureSortOption(e.target.id);
    let sortElement = document.getElementById('sortDropDown');
    sortElement.style.display = 'none';
    handleSortDisplay();
  }

  useEffect (() => {
    if (sortOption === 'mostPopular') {
      let selectedSortOption = document.getElementById(sortOption);
      selectedSortOption.style.color = 'white';
      selectedSortOption.style.backgroundColor = '#E86D4D';
    } else if (sortOption === 'highPrice') {
      let selectedSortOption = document.getElementById(sortOption);
      selectedSortOption.style.color = 'white';
      selectedSortOption.style.backgroundColor = '#E86D4D';
    } else if (sortOption === 'lowPrice') {
      let selectedSortOption = document.getElementById(sortOption);
      selectedSortOption.style.color = 'white';
      selectedSortOption.style.backgroundColor = '#E86D4D';
    }
  }, [sortOption]);

  const termDatalist = <datalist id="termsList">
    {ingredients.map((ingredient, i) => (
      <option value={ingredient.name} key={i}></option>
    ))}
  </datalist>;

  return (
    <div className="resultsContainer">
      <h1 className="unselectable">Recipes</h1>
      <div className="inputHeader resultsView">
        <div className="inputBar">
          <input
            id="searchResults"
            placeholder={`Find${usePantry ? '' : ' recipes containing'}...`}
            list={usePantry ? null : 'termsList'}
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          ></input>
          {usePantry ? null : termDatalist}
          <button onClick={() => {
            if (setSearchTerm(term, true)) setTerm('');
          }}>Search</button>
        </div>
        <div id="sort" style={usePantry ? {display: 'none'} : {}}>
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
      <div>
      {usePantry ? null : (Object.keys(searchTerms).map((term, i) => (
        <PantryItem key={i} name={term} togglePantryItem={(itemArray) => {
          setSearchTerm(itemArray[0], false);
        }} isActive={true} usePantry={true} />
      )))}
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