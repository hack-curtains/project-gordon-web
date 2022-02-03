import React, { useState, useEffect } from 'react';
import RecipeTile from './RecipeTile.jsx'
import axios from 'axios';
import { API_ADDR } from '../config';

const FavoriteView = ({ captureNavigation, captureRecipeId, user, captureFavorites, favorites, liked, captureLikes }) => {
  const [userFavoriteList, updateUserFavoriteList] = useState([]);


  useEffect (() => {
    if (user !== undefined && favorites[0] !== undefined) {
      updateUserFavoriteList(favorites)
    }
    // let userFavorite = captureFavorites();
    // updateUserFavoriteList(userFavorite);
  }, [favorites])

  // -- this will be used when the user data setup. --
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
      {userFavoriteList[0] !== undefined ? userFavoriteList.map((recipe, index) => {
        return <RecipeTile
        key={index}
        recipe={recipe}
        captureRecipeId={captureRecipeId}
        captureNavigation={captureNavigation}
        captureFavorites={captureFavorites}
        favorites={favorites}
        liked={liked}
        captureLikes={captureLikes}
        />
      }) :
      <div>Please Login to use this page</div>
      }
      </div>
    </div>
  );
}

export default FavoriteView;