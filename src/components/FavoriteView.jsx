import React, { useState, useEffect } from 'react';
import RecipeTile from './RecipeTile.jsx'


const FavoriteView = ({ captureNavigation, captureRecipeId, user, captureFavorites }) => {


  return (
    <div id="favoriteMain">
      <div id="favoriteTitle">Favorite Recipes</div>
      <div id="favoriteList">
      </div>
    </div>
  );
}

export default FavoriteView;