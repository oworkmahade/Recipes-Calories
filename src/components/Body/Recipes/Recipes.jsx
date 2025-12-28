import React from "react";
// import PropTypes from 'prop-types';
import RecipesCarts from "../RecipesCarts/RecipesCarts";
import Cook from "../Cook/Cook";

const Recipes = () => {
  return (
    <div className="border-black border-2 m-4 p-4">
      <h1 className="text-3xl font-bold">Our Recipes</h1>
      <p className="text-sm my-4 w-2/3 mx-auto font-light">
        Discover our restaurant recipes crafted with fresh ingredients and
        expert techniques to deliver unforgettable flavors. Each dish reflects
        passion, creativity, and a perfect balance of taste that brings
        authentic dining experiences to your table.
      </p>
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
