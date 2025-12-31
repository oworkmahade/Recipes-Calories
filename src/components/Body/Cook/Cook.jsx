import PropTypes from "prop-types";
import Preparing from "../Preparing/Preparing";
import Cooking from "../Cooking/Cooking";
import { useEffect, useState } from "react";
import {
  addCookingCountToLs,
  getStoredCookingCountValue,
} from "../../../utilities/localStorage";

const Cook = ({ count, cookItems }) => {
  const [cookingCount, setCookingCount] = useState(0);
  const [cookingItems, setCookingItems] = useState([]);

  const newCookingItem = (cookItem) => {
    const newCookingItem = [...cookingItems, cookItem];
    setCookingItems(newCookingItem);
  };

  const handleCookingCount = (cookItem) => {
    const newCount = cookingCount + 1;
    setCookingCount(newCount);
    addCookingCountToLs(newCount);
    newCookingItem(cookItem);
  };

  useEffect(() => {
    const storedCookingCountValue = getStoredCookingCountValue();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCookingCount(storedCookingCountValue);
  }, []);

  return (
    // cookItem
    <div className="border-gray-400 border m-4 p-4 w-1/3 rounded-3xl">
      <h1 className="text-xl font-bold p-4 border-b">Want to cook: {count}</h1>
      <table className="w-full border-collapse mt-4">
        <thead>
          <tr className="border-b text-gray-400">
            <th className="text-left text-sm py-2">Name</th>
            <th className="text-left text-sm py-2">Time</th>
            <th className="text-left text-sm py-2">Calories</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {cookItems.map((cookItem, idx) => (
            <Preparing
              key={idx}
              cookItem={cookItem}
              handleCookingCount={handleCookingCount}
            />
          ))}
        </tbody>
      </table>
      <Cooking
        cookingCount={cookingCount}
        cookingItems={cookingItems}
      ></Cooking>
    </div>
  );
};

Cook.propTypes = {
  count: PropTypes.number.isRequired,
  cookItems: PropTypes.array.isRequired,
};

export default Cook;
