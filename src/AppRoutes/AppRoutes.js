import React from "react";
import { Switch, Route } from "react-router-dom";
import RecipeFormContainer from "../RecipeForm/RecipeFormContainer/RecipeFormContainer";
import RecipeListContainer from "../RecipeList/RecipeListContainer/RecipeListContainer";

function AppRoutes() {
  return (
    <Switch>
      <Route path="/form/:recipeId" component={RecipeFormContainer} />
      <Route exact path="/" component={RecipeListContainer} />
    </Switch>
  );
}

export default AppRoutes;
