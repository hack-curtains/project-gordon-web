import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_ADDR } from '../config';

const SearchView = ({ favorites, currentView, captureFavorites, captureNavigation }) => {

  const [ingredients, setIngredients] = useState([]);
  axios.get(`${API_ADDR}/ingredients`)
    .then((response) => {
      setIngredients(response);
    });

  return (
    <div className="SearchView">
      <div className="PantryContainer">
        <h1>Pantry</h1>
        <div className="Pantry">
          {ingredients.length}
        </div>
      </div>
    </div>
  )
}

export default SearchView;