import React from "react";
// import PropTypes from 'prop-types';
import RecipesCarts from "../RecipesCarts/RecipesCarts";
import Cook from "../Cook/Cook";

const Recipes = () => {
  return (
    <div className="border-black border-2 m-4 p-4">
      <h1>Our Recipes Section</h1>
      <div className="md:flex md:flex-row md:gap-4 justify-between">
        <RecipesCarts></RecipesCarts>
        <Cook></Cook>
      </div>
    </div>
  );
};

// Recipes.propTypes = {

// };

export default Recipes;
