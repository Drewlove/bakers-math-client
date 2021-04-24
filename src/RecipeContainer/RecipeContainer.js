import { useState } from "react";
import RecipeHeader from "../RecipeHeader/RecipeHeader";
import RecipeSection from "../RecipeSection/RecipeSection";

function RecipeContainer() {
  const [recipe, setRecipe] = useState({
    recipe_name: "",
    flour_total: "",
  });

  const [flours, setFlours] = useState([
    { name: "", percent: "", id: Date.now() },
  ]);
  const [ingredients, setIngredients] = useState([
    { name: "", percent: "", id: Date.now() },
  ]);

  const handleChangeRecipe = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleChangeIngredient = (e, ingredientType) => {
    console.log(e, ingredientType);
    let nameArr = e.target.name.split("_");
    const propertyName = nameArr[0];
    const id = parseInt(nameArr[1]);
    if (ingredientType === "flour") updateFlour(e, propertyName, id);
    else if (ingredientType === "ingredient")
      updateIngredient(e, propertyName, id);
  };

  const updateIngredient = (e, propertyName, id) => {
    setIngredients(
      ingredients.map((key) =>
        key.id === id ? { ...key, [propertyName]: e.target.value } : key
      )
    );
  };

  const updateFlour = (e, propertyName, id) => {
    setFlours(
      flours.map((key) =>
        key.id === id ? { ...key, [propertyName]: e.target.value } : key
      )
    );
  };
  const handleSubtractClick = (e, id, ingredientType) => {
    e.preventDefault();
    if (ingredientType === "flour")
      setFlours(flours.filter((key) => key.id !== id));
    else if (ingredientType === "ingredient")
      setIngredients(ingredients.filter((key) => key.id !== id));
  };

  const handleClickAddIngredient = (e, ingredientType) => {
    e.preventDefault();
    if (ingredientType === "flour")
      setFlours([...flours, { name: "", percent: "", id: Date.now() }]);
    else if (ingredientType === "ingredient")
      setIngredients([
        ...ingredients,
        { name: "", percent: "", id: Date.now() },
      ]);
  };

  return (
    <form>
      <RecipeHeader
        recipe={recipe}
        handleChangeRecipe={(e) => handleChangeRecipe(e)}
      />

      <hr />
      <RecipeSection
        sectionName="Flour"
        recipe={recipe}
        ingredients={flours}
        ingredientType="flour"
        handleClickAddIngredient={(e, ingredientType) =>
          handleClickAddIngredient(e, ingredientType)
        }
        handleChangeIngredient={(e, ingredientType) =>
          handleChangeIngredient(e, ingredientType)
        }
        handleSubtractClick={(e, id, ingredientType) =>
          handleSubtractClick(e, id, ingredientType)
        }
      />
      <RecipeSection
        sectionName="Ingredients"
        recipe={recipe}
        ingredients={ingredients}
        ingredientType="ingredient"
        handleClickAddIngredient={(e, ingredientType) =>
          handleClickAddIngredient(e, ingredientType)
        }
        handleChangeIngredient={(e, ingredientType) =>
          handleChangeIngredient(e, ingredientType)
        }
        handleSubtractClick={(e, id, ingredientType) =>
          handleSubtractClick(e, id, ingredientType)
        }
      />
    </form>
  );
}

export default RecipeContainer;
