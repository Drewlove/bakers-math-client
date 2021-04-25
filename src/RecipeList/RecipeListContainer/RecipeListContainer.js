import React, { useState, useEffect } from "react";
import RecipeList from "../RecipeList/RecipeList";

function RecipeListContainer() {
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    const recipes = [
      { recipe_id: 1, recipe_name: "Sourdough" },
      { recipe_id: 2, recipe_name: "Challah" },
      { recipe_id: 3, recipe_name: "Focaccia" },
    ];

    setRecipeList(recipes);
  }, []);

  return <RecipeList recipeList={recipeList} />;
}

export default RecipeListContainer;
