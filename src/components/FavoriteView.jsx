import React, { useState, useEffect } from 'react';
import RecipeTile from './RecipeTile.jsx'
import axios from 'axios';
import { API_ADDR } from '../config';
import chefImage from '../../dist/resources/FavoriteView/chef.png';


const FavoriteView = ({ captureNavigation, captureRecipeId, user, captureFavorites, favorites, liked, captureLikes }) => {
  const [userFavoriteList, updateUserFavoriteList] = useState([]);

  useEffect (() => {
    if (user !== undefined && favorites[0] !== undefined) {
      updateUserFavoriteList(favorites)
    }
  }, [favorites])

  const routeUserToLoginPage = () => {
    captureNavigation('profile');
  }


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
      <div id="askToLogin">
      <div id="guestMessage" >There is no saved Favorite Recipes.<br></br> (For guests, please click the below image to go to the login page)</div>
      <div>
        <img onClick={routeUserToLoginPage} id="chefImage" src={chefImage}></img>
      </div>
      </div>
      }
      </div>
    </div>
  );
}

export default FavoriteView;