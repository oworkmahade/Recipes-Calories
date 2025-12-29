import PropTypes from "prop-types";

const CookItem = ({ item }) => {
  return (
    <tr className="border-b">
      <td className="text-sm py-3">{item.recipe_name}</td>

      <td className="text-sm py-3">{item.preparing_time} minutes</td>

      <td className="text-sm py-3">{item.calories} calories</td>

      <td className="py-3">
        <button className="bg-green-600 text-black text-sm px-4 py-1 rounded-full">
          Preparing
        </button>
      </td>
    </tr>
  );
};

CookItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CookItem;
