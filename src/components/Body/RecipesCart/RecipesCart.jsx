import { recipeImages } from "../../../assets/images";
import PropTypes from "prop-types";

const RecipesCart = ({ foodBlog }) => {
  const {
    recipe_id,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = foodBlog;
  return (
    <div
      className="rounded-3xl"
      style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}
    >
      <img
        className="rounded-3xl p-4"
        src={recipeImages[recipe_id]}
        alt={recipe_name}
        width={300}
      />
      <h2>{recipe_name}</h2>
      <p>{short_description}</p>

      <div>
        <strong>Ingredients:</strong>
        <ul>
          {ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <p>Preparing Time: {preparing_time} min</p>
      <p>Calories: {calories}</p>
    </div>
  );
};

RecipesCart.propTypes = {
  foodBlog: PropTypes.object.isRequired,
};

export default RecipesCart;
