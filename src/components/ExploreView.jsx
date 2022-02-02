import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_ADDR } from '../config';
const USER_ID_TODO = 1; // FIX ME

import SearchView from './SearchView.jsx';
import ResultsView from './ResultsView.jsx';

const ExploreView = ({ user, favorites, currentView, captureFavorites, captureNavigation, captureRecipeId, captureUsePantry }) => {

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
        let newPantry;
        if (response.data.length === 0) {
          newPantry = {
            'water': true
          };
        } else {
          newPantry = {};
          for (let i = 0; i < response.data.length; i++) {
            let ingredient = response.data[i];
            newPantry[ingredient.name] = true;
          }
        }
        setPantry(newPantry);
      });
  }

  const fetchResults = () => {
    const idString = Object.keys(pantry)
      .filter((name) => (
        pantry[name]
      ))
      .map((name) => (
        ingredients[ingredientsMap[name]].id
      ))
      .join(',');

    if (!idString) return;
    if (user.usePantry) {
      axios.get(`${API_ADDR}/match/ingredients?ids=${idString}`)
        .then((response) => {
          setResults(response.data.rows);
        });
    } else {
      axios.get(`${API_ADDR}/search/ingredients?ids=2`)
        .then((response) => {
          setResults(response.data.rows);
        });
    }
  };

  const togglePantryItem = (ingredientNames, categoryMode=false) => {
    const newPantry = {...pantry};
    let categoryModeIsAllFalse = !categoryMode || !ingredientNames.reduce((acc, name) => (acc || newPantry[name]), false);
    for (let ingredient of ingredientNames) {
      if (newPantry[ingredient]) {
        newPantry[ingredient] = false;
        axios.put(`${API_ADDR}/users/${USER_ID_TODO}/ingredients/${ingredients[ingredientsMap[ingredient]].id}/remove`);
      } else if (!categoryMode || categoryModeIsAllFalse) {
        newPantry[ingredient] = true;
        axios.post(`${API_ADDR}/users/${USER_ID_TODO}/ingredients/${ingredients[ingredientsMap[ingredient]].id}/add`);
      }
    }
    setPantry(newPantry);
  };

  useEffect(() => {
    fetchResults();
  }, [pantry, user.usePantry])

  return (
    <div className="searchResultsView">
      {currentView === 'explore' || currentView === 'pantry' ? (
        <SearchView
          ingredients={ingredients}
          ingredientsMap={ingredientsMap}
          pantry={pantry}
          mobile={currentView !== 'explore'}
          usePantry={user.usePantry}
          togglePantry={captureUsePantry}
          togglePantryItem={togglePantryItem}
        />
      ) : ''}

      {currentView === 'explore' || currentView === 'search' ? (
        <ResultsView
          results={results}
          favorites={favorites}
          mobile={currentView !== 'explore'}
          captureFavorites={captureFavorites}
          captureNavigation={captureNavigation}
          captureRecipeId={captureRecipeId}
        />
      ) : ''}
    </div>
  )
}

export default ExploreView;