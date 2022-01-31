import React, { useState, useEffect } from 'react';
import RecipeTile from './RecipeTile.jsx'


const FavoriteView = () => {

  return (
    <div id="favoriteMain">
      <div id="favoriteTitle">Favorite Recipes</div>
      <div id="favoriteList">
        <RecipeTile/>
        <RecipeTile/>
        <RecipeTile/>
        <RecipeTile/>
        <RecipeTile/>
        <RecipeTile/>
        <RecipeTile/>
        <RecipeTile/>
        <RecipeTile/>
        <RecipeTile/>
      </div>
    </div>
  );
}

export default FavoriteView;