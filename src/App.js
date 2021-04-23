import "./App.css";
import { useState } from "react";
import RecipeIngredientContainer from "./RecipeIngredientContainer/RecipeIngredientContainer";

function App() {
  const [recipe, setRecipe] = useState({
    recipe_name: "",
    flour_total: 0,
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

  const handleChangeFlours = (e) => {
    let nameArr = e.target.name.split("_");
    const propertyName = nameArr[0];
    const id = parseInt(nameArr[1]);
    setFlours(
      flours.map((key) =>
        key.id === id ? { ...key, [propertyName]: e.target.value } : key
      )
    );
  };

  //duplicative?
  const handleChangeIngredients = (e) => {
    let nameArr = e.target.name.split("_");
    const propertyName = nameArr[0];
    const id = parseInt(nameArr[1]);
    setIngredients(
      ingredients.map((key) =>
        key.id === id ? { ...key, [propertyName]: e.target.value } : key
      )
    );
  };

  const renderFlours = () => {
    return flours.map((key, i) => {
      const id = key.id;
      return (
        <RecipeIngredientContainer
          key={id}
          id={id}
          flourTotal={recipe.flour_total}
          ingredientCount={i}
          ingredientTextValue={key.name}
          ingredientPercentValue={key.percent}
          handleChange={(e) => handleChangeFlours(e)}
          handleSubtractClick={(e, id) => handleSubtractClick(e, id)}
        />
      );
    });
  };

  //duplicative?
  const renderIngredients = () => {
    return ingredients.map((key, i) => {
      const id = key.id;
      return (
        <RecipeIngredientContainer
          key={id}
          id={id}
          flourTotal={recipe.flour_total}
          ingredientCount={i}
          ingredientTextValue={key.name}
          ingredientPercentValue={key.percent}
          handleChange={(e) => handleChangeIngredients(e)}
          handleSubtractClick={(e, id) => handleSubtractClick(e, id)}
        />
      );
    });
  };

  const handleSubtractClick = (e, id) => {
    e.preventDefault();
    setFlours(flours.filter((key) => key.id !== id));
  };

  const handleAddClickFlour = (e) => {
    e.preventDefault();
    setFlours([...flours, { name: "", percent: "", id: Date.now() }]);
  };

  //duplicative
  const handleAddClickIngredients = (e) => {
    e.preventDefault();
    setIngredients([...ingredients, { name: "", percent: "", id: Date.now() }]);
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
              onClick={(e) => handleAddClickFlour(e)}
            >
              Add
            </button>
          </div>
          {renderFlours()}
        </section>
        <section className="recipe-section recipe-section_ingredients">
          <div className="recipe-banner">
            <p className="recipe-banner__text">Ingredients</p>
            <button
              className="recipe-button_add"
              onClick={(e) => handleAddClickIngredients(e)}
            >
              Add
            </button>
          </div>
          {renderIngredients()}
        </section>
      </form>
    </main>
  );
}

export default App;
