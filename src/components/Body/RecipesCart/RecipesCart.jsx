import { recipeImages } from "../../../assets/images";
import PropTypes from "prop-types";
import { MdOutlineWatchLater } from "react-icons/md";
import { RiFireLine } from "react-icons/ri";

const RecipesCart = ({ food, handleCount }) => {
  const {
    recipe_id,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = food;
  return (
    <div
      className="rounded-3xl"
      style={{ border: "1px solid gray", margin: "20px", padding: "10px" }}
    >
      <img
        className="rounded-3xl p-4 object-cover w-[300px] h-48"
        src={recipeImages[recipe_id]}
        alt={recipe_name}
      />
      <h2 className="font-bold text-left p-4">{recipe_name}</h2>
      <p className="text-left p-4 border-b font-light">{short_description}</p>

      <div className="text-left p-4 border-b ">
        <strong>Ingredients: {ingredients.length}</strong>
        <ul className="list-disc ml-10 font-light">
          {ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="md:flex md: flex-row justify-between items-center gap-2 mx-4 p-4 font-light">
        <div className="md:flex md:flex-row justify-between items-center gap-2">
          <MdOutlineWatchLater /> <span> {preparing_time} min</span>
        </div>

        <div className="md:flex md:flex-row justify-between items-center gap-2">
          <RiFireLine /> <span>{calories} calories</span>{" "}
        </div>
      </div>
      <div className="md:flex md:flex-row p-4">
        <button
          onClick={() => handleCount(food)}
          className="btn btn-primary rounded-3xl p-4 bg-green-600 font-semibold"
        >
          Want to Cook
        </button>
      </div>
    </div>
  );
};

RecipesCart.propTypes = {
  food: PropTypes.object.isRequired,
  handleCount: PropTypes.func.isRequired,
};

export default RecipesCart;
