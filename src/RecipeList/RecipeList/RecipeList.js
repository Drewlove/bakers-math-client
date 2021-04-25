import React from "react";
import RecipeListItem from "../RecipeListItem/RecipeListItem";

function RecipeList(props) {
  const renderList = () => {
    return props.recipeList.map((key) => {
      return <RecipeListItem key={key.recipe_id} recipe={key} />;
    });
  };
  return (
    <main>
      <ul className="recipe-list">{renderList()}</ul>
    </main>
  );
}

export default RecipeList;
