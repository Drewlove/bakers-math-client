import { useState } from "react";
import RecipeIngredientContainer from "../RecipeIngredientContainer/RecipeIngredientContainer";

function App() {
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

  const renderIngredients = (arr, ingredientType) => {
    return arr.map((key, i) => {
      const id = key.id;
      return (
        <RecipeIngredientContainer
          key={id}
          id={id}
          flourTotal={recipe.flour_total}
          ingredientCount={i}
          ingredientTextValue={key.name}
          ingredientPercentValue={key.percent}
          handleChangeIngredient={(e) =>
            handleChangeIngredient(e, ingredientType)
          }
          handleSubtractClick={(e, id) =>
            handleSubtractClick(e, id, ingredientType)
          }
        />
      );
    });
  };

  const handleSubtractClick = (e, id, ingredientType) => {
    e.preventDefault();
    if (ingredientType === "flour")
      setFlours(flours.filter((key) => key.id !== id));
    else if (ingredientType === "ingredient")
      setIngredients(ingredients.filter((key) => key.id !== id));
  };

  const handleAddClickIngredient = (e, ingredientType) => {
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
    <main className="recipe">
      <form>
        <header className="recipe-header">
          <div className="recipe-container">
            <legend className="recipe-container__legend">Name</legend>
            <input
              className="recipe__input_heading"
              type="text"
              placeholder="Recipe Name"
              value={recipe.recipe_name}
              name="recipe_name"
              onChange={(e) => handleChangeRecipe(e)}
            />
          </div>
          <div className="recipe-container">
            <legend className="recipe-container__legend">
              Total Flour (g)
            </legend>
            <input
              className="recipe__input_heading"
              type="number"
              placeholder="0"
              value={recipe.flour_total}
              name="flour_total"
              onChange={(e) => handleChangeRecipe(e)}
            />
          </div>
        </header>
        <hr />
        <section className="recipe-section">
          <div className="recipe-banner">
            <p className="recipe-banner__text">Flour</p>
            <button
              className="recipe-button_add"
              // onClick={(e) => handleAddClickFlour(e)}
              onClick={(e) => handleAddClickIngredient(e, "flour")}
            >
              Add
            </button>
          </div>
          {renderIngredients(flours, "flour")}
        </section>
        <section className="recipe-section recipe-section_ingredients">
          <div className="recipe-banner">
            <p className="recipe-banner__text">Ingredients</p>
            <button
              className="recipe-button_add"
              // onClick={(e) => handleAddClickIngredients(e)}
              onClick={(e) => handleAddClickIngredient(e, "ingredient")}
            >
              Add
            </button>
          </div>
          {renderIngredients(ingredients, "ingredient")}
        </section>
      </form>
    </main>
  );
}

export default App;
