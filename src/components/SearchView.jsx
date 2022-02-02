import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PantryItem from './PantryItem.jsx';

const SearchView = ({ ingredients, ingredientsMap, pantry, mobile, usePantry, togglePantry, togglePantryItem }) => {

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
        togglePantryItem([ingredient]);
        setIngredient('');
      }
    }
  };

  const categoriesToRender = {};
  const categoryActiveMap = {};
  for (let name in pantry) {
    const i = ingredientsMap[name];
    const category = ingredients[i].category;
    if (!categoriesToRender[category]) {
      categoriesToRender[category] = [];
      categoryActiveMap[category] = false;
    }
    categoriesToRender[category].push(name);
    categoryActiveMap[category] = pantry[name] || categoryActiveMap[category];
  }

  return (
    <div className="pantryContainer">
      <h1 className="unselectable">Pantry</h1>
      <div className="inputBar">
        <input id="ingredient" list="ingredientsList" value={ingredient} onChange={handleChange}></input>
        {ingredientDatalist}
        <button onClick={addIngredient}>Add Ingredient</button>
      </div>
      <div className={`pantry ${mobile ? '' : 'shadowBox'}`}>
        <label className="switch">
          <input type="checkbox" checked={usePantry} onChange={togglePantry}></input>
          <span className="slider"></span>
        </label>
        {Object.keys(categoriesToRender).map((category, i) => (
          <fieldset className="pantryCategory" key={i}>
            <legend className={
              `unselectable ${categoryActiveMap[category] && usePantry ? 'active' : ''}`
            } onClick={() => {
              if (usePantry) togglePantryItem(categoriesToRender[category], true);
          }}>{category}</legend>
            {categoriesToRender[category].map((name, j) => (
              <PantryItem key={j} name={name} togglePantryItem={togglePantryItem} isActive={pantry[name]} usePantry={usePantry} />
            ))}
          </fieldset>
        ))}
      </div>
    </div>
  )
}

export default SearchView;