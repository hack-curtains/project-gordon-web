import React from 'react';

import emptyHeart from '../../dist/resources/RecipeTile/emptyHeart.png';
import fullHeart from '../../dist/resources/RecipeTile/fullHeart.png';
import time from '../../dist/resources/RecipeTile/time.png';
import cost from '../../dist/resources/RecipeTile/cost.png';
import emptyStar from '../../dist/resources/RecipeTile/emptyStar.png';
import fullStar from '../../dist/resources/RecipeTile/fullStar.png';

const RecipeTile = ({ captureNavigation, recipe, captureRecipeId }) => {
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <div className="recipeTileContainer">
      <img
        className="recipeTileImage"
        src={recipe.image}
        onClick={(e) => {
          captureRecipeId(recipe.id);
          captureNavigation("recipe");
        }}
      />

      <div className="recipeTileInformationContainer">
        <div className="recipeTileHeader">
          <div
            className="recipeTileName"
            style={{fontSize: recipe.title.length > 30 ? '70%':'100%'}}
            onClick={(e) => {
              captureRecipeId(recipe.id);
              captureNavigation("recipe");
            }}
          >
            {recipe.title}
          </div>
          <img className="recipeTileFavoriteIcon" src={emptyStar} />
        </div>

        <div className="recipeTileStats">
          <img className="recipeTileTimeIcon" src={time} />
          <div className="recipeTileTime">
            {window.innerWidth > 800 ? `${recipe.time} mins`: `${recipe.time}'`}
          </div>
          <img className="recipeTileCostIcon" src={cost} />
          <div className="recipeTileCost">
            {window.innerWidth > 800 ? `$${numberWithCommas(Math.trunc(recipe.price))}/serving`: `$${numberWithCommas(Math.trunc(recipe.price))}`}
          </div>
          <img className="recipeTileRatingIcon" src={emptyHeart} />
          <div className="recipeTileRating">
            {window.innerWidth > 800 ? `${numberWithCommas(recipe.likes)} ${recipe.likes === 1 ? "like" : "likes"}`: recipe.likes > 999 ? `${Math.trunc(recipe.likes/1000)}k`: recipe.likes}
          </div>
        </div>

        <div className="recipeTileTags">
          {recipe.tags.find((r) => r.category === "diets") && (
            <div className="dietsTag">
              {recipe.tags.find((r) => r.category === "diets").name}
            </div>
          )}
          {recipe.tags.find((r) => r.category === "cuisines") && (
            <div className="cuisinesTag">
              {recipe.tags.find((r) => r.category === "cuisines").name}
            </div>
          )}
          {recipe.tags.find((r) => r.category === "dish") && (
            <div className="dishTag">
              {recipe.tags.find((r) => r.category === "dish").name}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeTile;
