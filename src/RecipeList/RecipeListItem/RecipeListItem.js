import React from "react";
import { Link } from "react-router-dom";

function RecipeListItem(props) {
  return (
    <Link className="recipe-list__link" to={`/form/${props.recipe.recipe_id}`}>
      <li className="recipe-list__list-item">{props.recipe.recipe_name}</li>
    </Link>
  );
}

export default RecipeListItem;
