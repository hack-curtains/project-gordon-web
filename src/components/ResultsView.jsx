import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeTile from './RecipeTile.jsx';

const ResultsView = ({ results, captureNavigation }) => {



  return (
    <div className="resultsContainer">
      <h1>Recipes</h1>
      <div className="results">
        <div>
          {results.map((recipe, i) => (
            <RecipeTile key={i} recipe={recipe} captureNavigation={captureNavigation} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ResultsView;