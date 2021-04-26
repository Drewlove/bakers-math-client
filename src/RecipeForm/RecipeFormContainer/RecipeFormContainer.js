import React from "react";
import { useParams } from "react-router-dom";
import RecipeForm from "../RecipeForm/RecipeForm";
import FetchData from "../../FetchData/FetchData";

function RecipeFormContainer() {
  const { recipeId } = useParams();

  return (
    <>
      <FetchData endpointArr={[`recipes/${recipeId}`]}>
        <RecipeForm />
      </FetchData>
    </>
  );
}

export default RecipeFormContainer;
