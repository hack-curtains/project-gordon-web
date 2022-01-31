import React from 'react';

import emptyHeart from '../../dist/resources/RecipeTile/emptyHeart.png';
import fullHeart from '../../dist/resources/RecipeTile/fullHeart.png';
import time from '../../dist/resources/RecipeTile/time.png';
import cost from '../../dist/resources/RecipeTile/cost.png';
import emptyStar from '../../dist/resources/RecipeTile/emptyStar.png';
import fullStar from '../../dist/resources/RecipeTile/fullStar.png';

const RecipeTile = () => {

  const recipe = {"id":1,"title":"Anchovies Appetizer With Breadcrumbs & Scallions","image":"https://spoonacular.com/recipeImages/2-556x370.jpg","servings":8,"price":82.06,"likes":0,"summary":"Anchovies Appetizer With Breadcrumbs & Scallions is a <b>dairy free and pescatarian</b> recipe with 8 servings. One serving contains <b>57 calories</b>, <b>5g of protein</b>, and <b>2g of fat</b>. For <b>82 cents per serving</b>, this recipe <b>covers 4%</b> of your daily requirements of vitamins and minerals. A mixture of marinated anchovies, scallions, garlic clove, and a handful of other ingredients are all it takes to make this recipe so delicious. From preparation to the plate, this recipe takes roughly <b>15 minutes</b>. Try <a href=\"https://spoonacular.com/recipes/spaghetti-with-anchovies-and-breadcrumbs-68\">Spaghetti with Anchovies and Breadcrumbs</a>, <a href=\"https://spoonacular.com/recipes/broccoli-rabe-with-anchovies-and-breadcrumbs-84627\">Broccoli Rabe with Anchovies and Breadcrumbs</a>, and <a href=\"https://spoonacular.com/recipes/italian-string-beans-with-anchovies-and-breadcrumbs-648259\">Italian String Beans With Anchovies and Breadcrumbs</a> for similar recipes.","tags":[{"id":1,"name":"antipasti","category":"dish","frequency":1254},{"id":2,"name":"starter","category":"dish","frequency":1254},{"id":3,"name":"snack","category":"dish","frequency":1254},{"id":4,"name":"appetizer","category":"dish","frequency":1254},{"id":5,"name":"antipasto","category":"dish","frequency":1254},{"id":6,"name":"hor d'oeuvre","category":"dish","frequency":1254},{"id":7,"name":"dairy free","category":"diets","frequency":4487},{"id":8,"name":"pescatarian","category":"diets","frequency":1105}],"ingredients":[{"id":1,"name":"boquerones","category":"Seafood","frequency":61},{"id":2,"name":"bread","category":"Bakery/Bread","frequency":142},{"id":3,"name":"garlic","category":"Produce","frequency":3639},{"id":4,"name":"olive oil","category":"Oil, Vinegar, Salad Dressing","frequency":2737},{"id":5,"name":"spring onions","category":"Produce","frequency":1262}],"time":15};

  return (
    <div className="recipeTileContainer">
      <img className="recipeTileImage" src={recipe.image} />

      <div className="recipeTileInformationContainer">
        <div className="recipeTileHeader">
          <div className="recipeTileName">{recipe.title}</div>
          <img className="recipeTileFavoriteIcon" src={emptyStar} />
        </div>

        <div className="recipeTileStats"> 
          <img className="recipeTileTimeIcon" src={time} />
          <div className="recipeTileTime">{recipe.time} mins</div>
          <img className="recipeTileCostIcon" src={cost} />
          <div className="recipeTileCost">${recipe.price}/serving</div>
          <img className="recipeTileRatingIcon" src={emptyHeart} />
          <div className="recipeTileRating">{recipe.likes} {recipe.likes === 1 ? 'like':'likes'}</div>
        </div>

        <div className="recipeTileTags">
        {recipe.tags.find(r => r.category === 'diets') && 
          <div className="dietsTag">{recipe.tags.find(r => r.category === 'diets').name}</div>}
          {recipe.tags.find(r => r.category === 'cuisines') && 
          <div className="cuisinesTag">{recipe.tags.find(r => r.category === 'cuisines').name}</div>}
          {recipe.tags.find(r => r.category === 'dish') && 
          <div className="dishTag">{recipe.tags.find(r => r.category === 'dish').name}</div>}
        </div>
      </div>
    </div>
  );
}

export default RecipeTile;