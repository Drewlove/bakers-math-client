import React from "react";

function RecipeIngredientName(props) {
  return (
    <div>
      <input
        className="recipe__input_name"
        type="text"
        placeholder="Ingredient"
        name={props.inputName}
        value={props.ingredientTextValue}
        onChange={(e) => props.handleChange(e)}
      />
    </div>
  );
}

export default RecipeIngredientName;
