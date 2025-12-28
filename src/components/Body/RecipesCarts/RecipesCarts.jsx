// import PropTypes from "prop-types";

import { useEffect, useState } from "react";
import RecipesCart from "../RecipesCart/RecipesCart";

const RecipesCarts = () => {
  const [foodBlogs, setFoodBlogs] = useState([]);
  // console check
  console.log(foodBlogs);
  useEffect(() => {
    fetch("foods.json")
      .then((res) => res.json())
      .then((data) => setFoodBlogs(data));
  }, []);

  return (
    <div className=" w-2/3 recipes-grid ">
      {foodBlogs.map((foodBlog) => (
        <RecipesCart key={foodBlog.recipe_id} foodBlog={foodBlog}></RecipesCart>
      ))}
    </div>
  );
};

RecipesCarts.propTypes = {};

export default RecipesCarts;
