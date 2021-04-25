import React from "react";
import FetchData from "../../FetchData/FetchData";
import RecipeList from "../RecipeList/RecipeList";

function RecipeListContainer() {
  return (
    <FetchData endpointArr={["recipes"]}>
      <RecipeList />
    </FetchData>
  );
}

export default RecipeListContainer;
