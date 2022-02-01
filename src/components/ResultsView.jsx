import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeTile from './RecipeTile.jsx';

const ResultsView = ({ ingredients, ingredientsMap, pantry, togglePantry }) => {

  // const [ingredient, setIngredient] = useState('');

  // const ingredientDatalist = <datalist id="ingredientsList">
  //   {ingredients.map((ingredient, i) => (
  //     <option value={ingredient.name} key={i}></option>
  //   ))}
  // </datalist>;

  // const handleChange = ({ target }) => {
  //   setIngredient(target.value);
  // };

  // const addIngredient = () => {
  //   if (ingredient in ingredientsMap) {
  //     if (!pantry[ingredient]) {
  //       togglePantry(ingredient);
  //       setIngredient('');
  //     }
  //   }
  // };

  return (
    <div className="resultsContainer">
      <h1>Recipes</h1>
      <div className="results">
        <div>
          <RecipeTile />
          <RecipeTile />
        </div>
      </div>
    </div>
  )
}

export default ResultsView;