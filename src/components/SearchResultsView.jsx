import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_ADDR } from '../config';

import SearchView from './SearchView.jsx';
import ResultsView from './ResultsView.jsx';

const SearchResultsView = ({ user, favorites, currentView, captureFavorites, captureNavigation }) => {

  const [ingredients, setIngredients] = useState([]);
  const [ingredientsMap, setIngredientsMap] = useState({});
  const [pantry, setPantry] = useState({});

  if (ingredients.length === 0) {
    axios.get(`${API_ADDR}/ingredients`)
      .then((response) => {
        setIngredients(response.data);
        for (let i = 0; i < response.data.length; i++) {
          let ingredient = response.data[i];
          ingredientsMap[ingredient.name] = i;
        }
        setIngredientsMap({...ingredientsMap});
      });
  }

  const togglePantry = (ingredient) => {
    const newPantry = {...pantry};
    if (newPantry[ingredient]) {
      delete newPantry[ingredient];
    } else {
      newPantry[ingredient] = true;
    }
    setPantry(newPantry);
  };

  return (
    <div className='searchResultsView'>
      <SearchView ingredients={ingredients} ingredientsMap={ingredientsMap} pantry={pantry} togglePantry={togglePantry} />
      <ResultsView />
    </div>
  )
}

export default SearchResultsView;