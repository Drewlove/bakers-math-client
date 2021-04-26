import React from "react";
import { useParams } from "react-router-dom";
import RecipeForm from "../RecipeForm/RecipeForm";
import FetchData from "../../FetchData/FetchData";

function RecipeFormContainer() {
  const { recipeId } = useParams();
  let endpointArr = recipeId === `new` ? [] : [`recipes/${recipeId}`];

  return (
    <>
      <FetchData endpointArr={endpointArr}>
        <RecipeForm />
      </FetchData>
    </>
  );
}

export default RecipeFormContainer;
