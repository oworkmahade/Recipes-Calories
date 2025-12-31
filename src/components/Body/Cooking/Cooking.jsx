import PropTypes from "prop-types";
import CookingItem from "../CookingItem/CookingItem";

const Cooking = ({ cookingCount, cookingItems }) => {
  return (
    <div>
      <h1 className="text-xl font-bold p-4 border-b">
        Currently cooking: {cookingCount}
      </h1>
      <table className="w-full border-collapse mt-4">
        <thead>
          <tr className="border-b text-gray-400">
            <th className=" text-sm py-2">ID</th>
            <th className=" text-sm py-2">Name</th>
            <th className=" text-sm py-2">Time</th>
            <th className="text-sm py-2">Calories</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {Array.isArray(cookingItems) &&
            cookingItems.map((cookingItem, idx) => (
              <CookingItem key={idx} cookingItem={cookingItem}></CookingItem>
            ))}
        </tbody>
      </table>
    </div>
  );
};

Cooking.propTypes = {
  cookingCount: PropTypes.number.isRequired,
  cookingItems: PropTypes.array.isRequired,
};

export default Cooking;
