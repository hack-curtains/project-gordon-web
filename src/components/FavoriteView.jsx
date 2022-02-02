import React, { useState, useEffect } from 'react';
import RecipeTile from './RecipeTile.jsx'
import axios from 'axios';
import { API_ADDR } from '../config';

const FavoriteView = ({ captureNavigation, captureRecipeId, user, captureFavorites, favorites }) => {
  const [userFavoriteList, updateUserFavoriteList] = useState([]);


  useEffect (() => {
    let userFavorite = captureFavorites();
    console.log(userFavorite);
    updateUserFavoriteList(userFavorite);
  }, [favorites])

  // const handleRequestRecipes = (favoriteList) => {
  //   const userFavoriteListStorage = [];

  //   for (let i = 0; i < favoriteList.length; i++) {
  //     axios.get(`${API_ADDR}/recipes/${favoriteList[i]}`)
  //     .then ((res) => {
  //       userFavoriteListStorage.push(res.data);
  //     })
  //   }
  //   updateUserFavoriteList(userFavoriteListStorage);
  // }

  return (
    <div id="favoriteMain">
      <div id="favoriteTitle">Favorite Recipes</div>
      <div id="favoriteList">
      {userFavoriteList[0] !== undefined && userFavoriteList.map((recipe, index) => {
        return <RecipeTile
        key={index}
        recipe={recipe}
        captureRecipeId={captureRecipeId}
        captureNavigation={captureNavigation}
        captureFavorites={captureFavorites}
        favorites={favorites}
        />
      })}
      </div>
    </div>
  );
}

export default FavoriteView;