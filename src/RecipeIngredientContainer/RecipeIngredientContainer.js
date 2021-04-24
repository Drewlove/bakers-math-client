import React from "react";
import RecipeIngredientName from "../RecipeIngredientName/RecipeIngredientName";
import RecipeIngredientPercent from "../RecipeIngredientPercent/RecipeIngredientPercent";

function RecipeIngredientContainer(props) {
  const renderSubtractButton = () => {
    const id = props.id;
    return (
      <button
        onClick={(e) => props.handleSubtractClick(e, id)}
        className="recipe__button_delete"
      >
        -
      </button>
    );
  };

  const getWeight = () => {
    let weight = props.flourTotal * (props.ingredientPercentValue / 100);
    weight = isNaN(weight) || !isFinite(weight) ? "" : weight.toFixed(1);

    return (
      <p className="recipe-ingredient-container__calc-weight-value">
        {weight} g
      </p>
    );
  };

  return (
    <>
      <div className="recipe-ingredient-container">
        <RecipeIngredientName
          inputName={`name_${props.id}`}
          ingredientTextValue={props.ingredientTextValue}
          handleChangeIngredient={(e) => props.handleChangeIngredient(e)}
        />
        <div className="recipe-ingredient-percent-wt-btn-container">
          <RecipeIngredientPercent
            inputName={`percent_${props.id}`}
            ingredientPercentValue={props.ingredientPercentValue}
            handleChangeIngredient={(e) => props.handleChangeIngredient(e)}
          />

          <div className="recipe-ingredient-container__calc-weight-div">
            {getWeight()}
          </div>
          <div>{renderSubtractButton()}</div>
        </div>
      </div>
    </>
  );
}

export default RecipeIngredientContainer;
