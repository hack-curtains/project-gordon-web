import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchView = ({ ingredients, ingredientsMap, pantry, togglePantry }) => {

  const [ingredient, setIngredient] = useState('');

  const ingredientDatalist = <datalist id="ingredientsList">
    {ingredients.map((ingredient, i) => (
      <option value={ingredient.name} key={i}></option>
    ))}
  </datalist>;

  const handleChange = ({ target }) => {
    setIngredient(target.value);
  };

  const addIngredient = () => {
    if (ingredient in ingredientsMap) {
      if (!pantry[ingredient]) {
        togglePantry(ingredient);
        setIngredient('');
      }
    }
  };

  return (
    <div className="pantryContainer">
      <h1>Pantry</h1>
      <div className="pantry">
        <div className="addIngredients">
          <input id="ingredient" list="ingredientsList" value={ingredient} onChange={handleChange}></input>
          {ingredientDatalist}
          <button onClick={addIngredient}>Add Ingredient</button>
        </div>
        <div>
          {Object.keys(pantry).map((name, i) => (
            <p key={i}>{name}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SearchView;