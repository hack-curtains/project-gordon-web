import React from 'react';
import parse from 'html-react-parser';

import time from '../../dist/resources/SoloRecipeView/time.png';
import cost from '../../dist/resources/SoloRecipeView/cost.png';
import emptyHeart from '../../dist/resources/SoloRecipeView/emptyHeart.png';
import fullHeart from '../../dist/resources/SoloRecipeView/fullHeart.png';
import back from '../../dist/resources/SoloRecipeView/back.png';
import check from '../../dist/resources/SoloRecipeView/check.png';
import emptyStar from '../../dist/resources/SoloRecipeView/emptyStar.png';
import fullStar from '../../dist/resources/SoloRecipeView/fullStar.png';

const SoloRecipeView = ({ captureNavigation, previousView }) => {

  const pantry = [1, 2, 3, 4, 45];
  const recipe = {"id":37,"title":"Flounder With Spring Artichoke Hearts & Capers","likes":1,"summary":"Flounder With Spring Artichoke Hearts & Capers is a <b>gluten free, primal, and ketogenic</b> main course. This recipe serves 3 and costs $3.26 per serving. One serving contains <b>355 calories</b>, <b>22g of protein</b>, and <b>25g of fat</b>. 1 person were impressed by this recipe. It will be a hit at your <b>Spring</b> event. A mixture of wine, butter, capers, and a handful of other ingredients are all it takes to make this recipe so scrumptious. To use up the butter you could follow this main course with the <a href=\"https://spoonacular.com/recipes/cinnamon-butter-cake-60334\">Cinnamon Butter Cake</a> as a dessert. From preparation to the plate, this recipe takes about <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 41%</b>. This score is solid. Similar recipes include <a href=\"https://spoonacular.com/recipes/eggs-in-purgatory-with-artichoke-hearts-potatoes-and-capers-109240\">Eggs in Purgatory with Artichoke Hearts, Potatoes and Capers</a>, <a href=\"https://spoonacular.com/recipes/eggs-in-purgatory-with-artichoke-hearts-potatoes-and-capers-29922\">Eggs In Purgatory With Artichoke Hearts, Potatoes, And Capers</a>, and <a href=\"https://spoonacular.com/recipes/potato-salad-with-capers-kalamata-olives-and-artichoke-hearts-109009\">Potato Salad With Capers, Kalamatan Olives and Artichoke Hearts</a>.","time":45,"servings":3,"image":"https://spoonacular.com/recipeImages/1388-556x370.jpg","price":327.54,"source_name":"One Hungry Mama","source_url":"http://onehungrymama.com/2010/05/recipe-flounder-with-spring-artichokes-hearts-capers/","ingredients":[{"id":168,"name":"marinated artichokes","category":"Canned and Jarred","frequency":45},{"id":45,"name":"butter","category":"Milk, Eggs, Other Dairy","frequency":1914},{"id":37,"name":"capers","category":"Canned and Jarred","frequency":121},{"id":169,"name":"chicken broth","category":"Canned and Jarred","frequency":389},{"id":170,"name":"flounder fillets","category":"Seafood","frequency":11},{"id":33,"name":"lemon juice","category":"Produce","frequency":1202},{"id":4,"name":"olive oil","category":"Oil, Vinegar, Salad Dressing","frequency":2737},{"id":49,"name":"onion","category":"Produce","frequency":2464},{"id":77,"name":"dry white wine","category":"Alcoholic Beverages","frequency":347}],"sections":1,"instructions": [
    {
      "name": "",
      "steps": [
        "Make croutons: Preheat oven to 375 degrees.",
        "Place bread on a rimmed baking sheet.",
        "Drizzle with 2 tablespoons of the oil, and season with salt and pepper; toss to coat.",
        "Bake, tossing occasionally, until golden, 12 to 15 minutes; remove from oven; and let cool."
      ]
    }
  ],"tags":[{"id":14,"name":"lunch","category":"dish","frequency":4274},{"id":15,"name":"main course","category":"dish","frequency":4274},{"id":16,"name":"main dish","category":"dish","frequency":4274},{"id":17,"name":"dinner","category":"dish","frequency":4274},{"id":13,"name":"gluten free","category":"diets","frequency":5393},{"id":19,"name":"primal","category":"diets","frequency":937}],"tag_ids":[14,15,16,17,13,19],"ingredient_ids":[168,45,37,169,170,33,4,49,77],"createdAt":"2022-01-31T03:16:59.614Z","updatedAt":"2022-01-31T03:17:12.794Z"}

  return (
    <div className="soloRecipeViewContainer">
      <div className="recipeViewHeader">
        <img className="backButton" src={back} onClick={(e) => captureNavigation(previousView)}/>
        <div className="recipeName">{recipe.title}</div>
        <img className="favoriteButton" src={emptyStar}/>
      </div>
      <div className="recipeInformation">
        <img className="recipeImage" src="https://spoonacular.com/recipeImages/579247-556x370.jpg"/>
        <div className="recipeStatsContainer">
          <div className="recipeStats">
            <img className="recipeStatIcon" src={time}/>
            <div className="recipeStat">{recipe.time} minutes</div>
          </div>
          <div className="recipeStats">
            <img className="recipeStatIcon" src={cost}/>
            <div className="recipeStat">${Math.trunc(recipe.price)} per serving</div>
          </div>
          <div className="recipeStats">
            <img className="recipeStatIcon" src={fullHeart}/>
            <div className="recipeStat">{recipe.likes} {recipe.likes > 1 ? 'users like':'user likes'} this recipe</div>
          </div>
          <div className="recipeTagsContainer">
            <div className="dietTagsContainer">
              {recipe.tags.map(tag => {
                if (tag.category === 'diets') {
                  return <div key={tag.id}>{tag.name}</div>
                }
              })}
            </div>
            <div className="cuisineTagsContainer">
              {recipe.tags.map(tag => {
                if (tag.category === 'cuisines') {
                  return <div key={tag.id}>{tag.name}</div>
                }
              })}
            </div>
            <div className="dishTagsContainer">
              {recipe.tags.map(tag => {
                if (tag.category === 'dish') {
                  return <div key={tag.id}>{tag.name}</div>
                }
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="recipeDescription">
        {parse(recipe.summary)}
      </div>
      <div className="recipeBody">
        <div className="recipeIngredientList">
          <section>Ingredients List</section>
          {recipe.ingredients.map(ingredient => {
            return (
              <div className="ingredientListEntry" key={ingredient.id}>
                <img src={check} style={{visibility: pantry.includes(ingredient.id) ? 'visible':'hidden'}}/>
                <div>{ingredient.name}</div>
              </div>
            );
          })}
        </div>
        <div className="recipeInstructions">
          <section className="instructionsHeader">Instructions</section>
          {recipe.instructions.map((instruction, index) => {
            return (
              <div className="instructionContainer" key={index}>
                <div>{instruction.name}</div>
                {instruction.steps.map((step, index) => (
                  <div key={index}>{index+1}. {step}</div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SoloRecipeView;