import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeTile from './RecipeTile.jsx';
import PantryItem from './PantryItem.jsx';

const ResultsView = ({ ingredients, results, mobile, searchTerms, captureNavigation, captureRecipeId,
                       favorites, captureFavorites, setSearchTerm, liked, captureLikes }) => {

  const [term, setTerm] = useState('');

  const termDatalist = <datalist id="termsList">
    {ingredients.map((ingredient, i) => (
      <option value={ingredient.name} key={i}></option>
    ))}
  </datalist>;

  return (
    <div className="resultsContainer">
      <h1 className="unselectable">Recipes</h1>
      <div className="inputBar">
        <input
          id="searchResults"
          placeholder="Find recipes containing..."
          list="termsList"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        ></input>
        {termDatalist}
        <button onClick={() => {
          if (setSearchTerm(term, true)) setTerm('');
        }}>Search</button>
      </div>
      <div>
      {Object.keys(searchTerms).map((term, i) => (
        <PantryItem key={i} name={term} togglePantryItem={(itemArray) => {
          setSearchTerm(itemArray[0], false);
        }} isActive={true} usePantry={true} />
      ))}
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