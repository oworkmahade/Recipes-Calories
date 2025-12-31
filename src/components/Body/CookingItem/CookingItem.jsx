import PropTypes from "prop-types";

const CookingItem = ({ cookingItem }) => {
  return (
    <tr className="border-b">
      <td className="text-sm py-3">{cookingItem.recipe_name}</td>

      <td className="text-sm py-3">{cookingItem.preparing_time} minutes</td>

      <td className="text-sm py-3">{cookingItem.calories} calories</td>
    </tr>
  );
};

CookingItem.propTypes = {
  cookingItem: PropTypes.object.isRequired,
};

export default CookingItem;
