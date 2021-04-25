import React from "react";
import RecipeListItem from "../RecipeListItem/RecipeListItem";

function RecipeList(props) {
  const renderList = () => {
    return props.data[0].map((key) => {
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
