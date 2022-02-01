import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PantryItem from './PantryItem.jsx';

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
      <div className="inputBar">
        <input id="ingredient" list="ingredientsList" value={ingredient} onChange={handleChange}></input>
        {ingredientDatalist}
        <button onClick={addIngredient}>Add Ingredient</button>
      </div>
      <div className="pantry">
        {Object.keys(pantry).map((name, i) => (
          <PantryItem key={i} name={name} togglePantry={togglePantry} isActive={pantry[name]} />
        ))}
      </div>
    </div>
  )
}

export default SearchView;