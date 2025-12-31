import PropTypes from "prop-types";

const Preparing = ({ cookItem, handleCookingCount }) => {
  return (
    <tr className="border-b">
      <td className="text-sm py-3">{cookItem.recipe_id}</td>
      <td className="text-sm py-3">{cookItem.recipe_name}</td>

      <td className="text-sm py-3">{cookItem.preparing_time} minutes</td>

      <td className="text-sm py-3">{cookItem.calories} calories</td>

      <td className="py-3">
        <button
          onClick={() => handleCookingCount(cookItem)}
          className="bg-green-600 text-black text-sm px-4 py-1 rounded-full"
        >
          Preparing
        </button>
      </td>
    </tr>
  );
};

Preparing.propTypes = {
  cookItem: PropTypes.object.isRequired,
  handleCookingCount: PropTypes.func.isRequired,
};

export default Preparing;
