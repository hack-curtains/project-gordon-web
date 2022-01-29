import React from 'react';

import emptyHeart from '../../dist/resources/RecipeTile/emptyHeart.png';
import time from '../../dist/resources/RecipeTile/time.png';
import cost from '../../dist/resources/RecipeTile/cost.png';
import rating from '../../dist/resources/RecipeTile/rating.png';

const RecipeTile = () => {

  return (
    <div className="RecipeTileContainer">
      <img className="RecipeTileImage" src="https://spoonacular.com/recipeImages/579247-556x370.jpg" />

      <div className="RecipeTileInformationContainer">
        <div className="RecipeTileHeader">
          <div className="RecipeTileName">Recipe Name</div>
          <img className="RecipeTileFavoriteIcon" src={emptyHeart} />
        </div>

        <div className="RecipeTileStats"> 
          <img className="RecipeTileTimeIcon" src={time} />
          <div className="RecipeTileTime">5 mins</div>
          <img className="RecipeTileCostIcon" src={cost} />
          <div className="RecipeTileCost">$7.35/serving</div>
          <img className="RecipeTileRatingIcon" src={rating} />
          <div className="RecipeTileRating">4.4/5</div>
        </div>

        <div className="RecipeTileTags">
          <div className="DietaryTag">Keto</div>
          <div className="CuisineTag">Italian</div>
          <div className="MealTag">Dinner</div>
        </div>
      </div>
    </div>
  );
}

export default RecipeTile;