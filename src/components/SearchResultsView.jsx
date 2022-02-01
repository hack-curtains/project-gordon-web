import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_ADDR } from '../config';
const USER_ID_TODO = 1; // FIX ME

import SearchView from './SearchView.jsx';
import ResultsView from './ResultsView.jsx';

const SearchResultsView = ({ user, favorites, currentView, captureFavorites, captureNavigation, captureRecipeId }) => {

  const [ingredients, setIngredients] = useState([]);
  const [ingredientsMap, setIngredientsMap] = useState({});
  const [pantry, setPantry] = useState({});
  const [results, setResults] = useState([]);

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

  if (Object.keys(ingredientsMap).length !== 0 && Object.keys(pantry).length === 0) {
    axios.get(`${API_ADDR}/users/${USER_ID_TODO}/ingredients`)
      .then((response) => {
        let newPantry = {};
        for (let i = 0; i < response.data.length; i++) {
          let ingredient = response.data[i];
          newPantry[ingredient.name] = true;
        }
        console.log(response);
        setPantry(newPantry);
      });
  }

  const fetchResults = () => {
    const idString = Object.keys(pantry).map((name) => (
      ingredients[ingredientsMap[name]].id
    )).join(',');
    axios.get(`${API_ADDR}/search/ingredients?ids=${idString}`)
      .then((response) => {
        setResults(response.data.rows);
      });
  };

  const togglePantry = (ingredient) => {
    const newPantry = {...pantry};
    if (newPantry[ingredient]) {
      delete newPantry[ingredient];
      axios.put(`${API_ADDR}/users/${USER_ID_TODO}/ingredients/${ingredients[ingredientsMap[ingredient]].id}/remove`);
    } else {
      newPantry[ingredient] = true;
      axios.post(`${API_ADDR}/users/${USER_ID_TODO}/ingredients/${ingredients[ingredientsMap[ingredient]].id}/add`);
    }
    setPantry(newPantry);
  };

  useEffect(() => {
    fetchResults();
  }, [pantry])

  return (
    <div className='searchResultsView'>
      <SearchView ingredients={ingredients} ingredientsMap={ingredientsMap} pantry={pantry} togglePantry={togglePantry} />
      <ResultsView results={results} captureNavigation={captureNavigation} captureRecipeId={captureRecipeId} />
    </div>
  )
}

export default SearchResultsView;