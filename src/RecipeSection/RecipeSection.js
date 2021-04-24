import React from "react";
import RecipeIngredient from "../RecipeIngredient/RecipeIngredient";

function RecipeSection(props) {
  const renderIngredients = (arr) => {
    return arr.map((key, i) => {
      const id = key.id;
      return (
        <RecipeIngredient
          key={id}
          id={id}
          flourTotal={props.recipe.flour_total}
          ingredientCount={i}
          ingredientTextValue={key.name}
          ingredientPercentValue={key.percent}
          handleChangeIngredient={(e) =>
            props.handleChangeIngredient(e, props.ingredientType)
          }
          handleSubtractClick={(e, id) =>
            props.handleSubtractClick(e, id, props.ingredientType)
          }
        />
      );
    });
  };

  return (
    <>
      <section className="recipe-section">
        <div className="recipe-banner">
          <p className="recipe-banner__text">{props.sectionName}</p>
          <button
            className="recipe-button_add"
            onClick={(e) =>
              props.handleClickAddIngredient(e, props.ingredientType)
            }
          >
            Add
          </button>
        </div>
        {renderIngredients(props.ingredients)}
      </section>
    </>
  );
}

export default RecipeSection;
