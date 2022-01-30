import React from 'react';

import time from '../../dist/resources/SoloRecipeView/time.png';
import cost from '../../dist/resources/SoloRecipeView/cost.png';
import emptyHeart from '../../dist/resources/SoloRecipeView/emptyHeart.png';
import fullHeart from '../../dist/resources/SoloRecipeView/fullHeart.png';
import back from '../../dist/resources/SoloRecipeView/back.png';
import check from '../../dist/resources/SoloRecipeView/check.png';

const SoloRecipeView = () => {

  return (
    <div className="SoloRecipeViewContainer">
      <div className="RecipeViewHeader">
        <img className="BackButton" src={back}/>
        <div className="RecipeName">Recipe Name</div>
        <img className="BackButton" src={emptyHeart}/>
      </div>
      <div className="RecipeInformation">
        <img className="RecipeImage" src="https://spoonacular.com/recipeImages/579247-556x370.jpg"/>
        <div className="RecipeStatsContainer">
          <div className="RecipeStats">
            <img className="RecipeStatIcon" src={time}/>
            <div className="RecipeStat">5 minutes</div>
          </div>
          <div className="RecipeStats">
            <img className="RecipeStatIcon" src={cost}/>
            <div className="RecipeStat">$5.00 per serving</div>
          </div>
          <div className="RecipeStats">
            <img className="RecipeStatIcon" src={fullHeart}/>
            <div className="RecipeStat">13 users like this recipe</div>
          </div>
          <div className="RecipeTagsContainer">
            <div className="DietTagsContainer">
              <div>pescatarian</div>
              <div>dairy free</div>
            </div>
            <div className="CuisineTagsContainer">
              <div>Barbecue</div>
              <div>American</div>
              <div>Southern</div>
            </div>
            <div className="DishTagsContainer">
              <div>Main Course</div>
              <div>Lunch</div>
            </div>
          </div>
        </div>
      </div>
      <div className="RecipeDescription">
        This is a test description. This is a test description.This is a test description.This is a test description.This is a test description.This is a test description.This is a test description.This is a test description.This is a test description.This is a test description.This is a test description.
      </div>
      <div className="RecipeBody">
        <div className="RecipeIngredientList">
          <section>Ingredients List</section>
          <div className="IngredientListEntry">
            <img src={check}/>
            <div>Ingredient Name</div>
          </div>
          <div className="IngredientListEntry">
            <img src={check} style={{visibility: 'hidden'}}/>
            <div>Ingredient Name</div>
          </div>
          <div className="IngredientListEntry">
            <img src={check}/>
            <div>Ingredient Name</div>
          </div>
        </div>
        <div className="RecipeInstructions">
          <section className="InstructionsHeader">Instructions</section>
          <div>1. This is a test instructionThis is a test instructionThis is a test instructionThis is a test instructionThis is a test instruction</div>
          <div>2. This is a test instructionThis is a test instructionThis is a test instructionThis is a test instructionThis is a test instruction</div>
          <div>3. This is a test instructionThis is a test instructionThis is a test instructionThis is a test instructionThis is a test instruction</div>
        </div>
      </div>
    </div>
  );
}

export default SoloRecipeView;