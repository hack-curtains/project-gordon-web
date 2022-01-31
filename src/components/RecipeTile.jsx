import React from 'react';

import emptyHeart from '../../dist/resources/RecipeTile/emptyHeart.png';
import time from '../../dist/resources/RecipeTile/time.png';
import cost from '../../dist/resources/RecipeTile/cost.png';
import rating from '../../dist/resources/RecipeTile/rating.png';

const RecipeTile = () => {

  return (
    <div className="recipeTileContainer">
      <img className="recipeTileImage" src="https://spoonacular.com/recipeImages/579247-556x370.jpg" />

      <div className="recipeTileInformationContainer">
        <div className="recipeTileHeader">
          <div className="recipeTileName">Recipe Name</div>
          <img className="recipeTileFavoriteIcon" src={emptyHeart} />
        </div>

        <div className="recipeTileStats"> 
          <img className="recipeTileTimeIcon" src={time} />
          <div className="recipeTileTime">5 mins</div>
          <img className="recipeTileCostIcon" src={cost} />
          <div className="recipeTileCost">$7.35/serving</div>
          <img className="recipeTileRatingIcon" src={rating} />
          <div className="recipeTileRating">4.4/5</div>
        </div>

        <div className="recipeTileTags">
          <div className="dietaryTag">Keto</div>
          <div className="cuisineTag">Italian</div>
          <div className="mealTag">Dinner</div>
        </div>
      </div>
    </div>
  );
}

export default RecipeTile;