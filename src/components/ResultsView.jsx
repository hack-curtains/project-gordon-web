import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeTile from './RecipeTile.jsx';

const ResultsView = ({ results, captureNavigation, captureRecipeId, favorites, captureFavorites }) => {

  return (
    <div className="resultsContainer">
      <h1 className="unselectable">Recipes</h1>
      <div className="inputBar">
        <input id="searchResults" placeholder="Find..."></input>
        <button>Search</button>
      </div>
      <div className="results">
        {results.map((recipe, i) => (
          <RecipeTile
            key={i}
            recipe={recipe}
            favorites={favorites}
            captureFavorites={captureFavorites}
            captureNavigation={captureNavigation}
            captureRecipeId={captureRecipeId}
          />
        ))}
      </div>
    </div>
  )
}

export default ResultsView;