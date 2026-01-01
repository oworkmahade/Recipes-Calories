import RecipesCart from "../RecipesCart/RecipesCart";
import PropTypes from "prop-types";

const RecipesCarts = ({ foods, handleCount }) => {
  return (
    <div className="w-2/3 recipes-grid">
      {foods.map((food) => (
        <RecipesCart
          key={food.recipe_id}
          food={food}
          handleCount={handleCount}
        ></RecipesCart>
      ))}
    </div>
  );
};

RecipesCarts.propTypes = {
  handleCount: PropTypes.func.isRequired,
};

export default RecipesCarts;
