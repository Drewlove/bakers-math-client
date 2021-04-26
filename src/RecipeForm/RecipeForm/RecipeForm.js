import { useEffect, useState } from "react";
import RecipeFormHeader from "../RecipeFormHeader/RecipeFormHeader";
import RecipeFormSection from "../RecipeFormSection/RecipeFormSection";
import { useParams } from "react-router-dom";

function RecipeForm(props) {
  const [recipe, setRecipe] = useState({
    recipe_name: "",
    flour_total: "",
  });

  const [flours, setFlours] = useState([{ name: "", percent: "", id: "" }]);
  const [ingredients, setIngredients] = useState([
    { name: "", percent: "", id: "" },
  ]);

  useEffect(() => {
    const recipe = props.data[0];
    const { flours, ingredients } = recipe;
    setFlours(getArrWithKeyIds(flours));
    setIngredients(getArrWithKeyIds(ingredients));
    setRecipe({
      recipe_name: recipe.recipe_name,
      flour_total: recipe.flour_total,
    });
  }, []);

  const getArrWithKeyIds = (arr) => {
    return arr.map((key) => {
      return { ...key, id: `${key.name}-${key.percent}` };
    });
  };

  const handleChangeRecipe = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleChangeIngredient = (e, ingredientType) => {
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

  const { recipeId } = useParams();
  return (
    <form>
      <RecipeFormHeader
        recipe={recipe}
        handleChangeRecipe={(e) => handleChangeRecipe(e)}
      />

      <hr />
      <RecipeFormSection
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
      <RecipeFormSection
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

export default RecipeForm;
