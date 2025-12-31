import PropTypes from "prop-types";
import Preparing from "../Preparing/Preparing";
import Cooking from "../Cooking/Cooking";
import { useEffect, useState } from "react";
import {
  addCookingCountToLs,
  getStoredCookingCountValue,
  addCookingFoodToLs,
  getStoredCookingItems,
  removeCookItemFromLs,
  addTotalTimeToLs,
  getTotalTimeFromLs,
} from "../../../utilities/localStorage";

const Cook = ({
  count,
  wantToCookItems,
  handleCookDecrease,
  handleRemoveClickedCookItem,
}) => {
  const [cookingCount, setCookingCount] = useState(0);
  const [cookingItems, setCookingItems] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  useEffect(() => {
    const storedPreparingTime = getTotalTimeFromLs();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTotalTime(storedPreparingTime);
  }, []);

  const newCookingItem = (cookItem) => {
    const newCookingItem = [...cookingItems, cookItem];
    setCookingItems(newCookingItem);
  };

  const handleCookingPreparingTime = (preparingTime) => {
    const newPreparingTime = totalTime + preparingTime;
    setTotalTime(newPreparingTime);
    addTotalTimeToLs(newPreparingTime);
  };

  const handleCalories = (calories) => {
    const newCalories = totalCalories + calories;
    setTotalCalories(newCalories);
  };
  // preparing button function
  const handleCookingCount = (cookItem) => {
    const newCount = cookingCount + 1;
    setCookingCount(newCount);
    addCookingCountToLs(newCount);
    newCookingItem(cookItem);
    handleCookDecrease();
    addCookingFoodToLs(cookItem);
    handleRemoveClickedCookItem(cookItem.recipe_id);
    removeCookItemFromLs(cookItem.recipe_id);
    handleCookingPreparingTime(cookItem.preparing_time);
    handleCalories(cookItem.calories);
  };

  useEffect(() => {
    const storedCookingCountValue = getStoredCookingCountValue();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCookingCount(storedCookingCountValue);
  }, []);

  useEffect(() => {
    const storedCookingItemFromLs = getStoredCookingItems();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCookingItems(storedCookingItemFromLs);
  }, []);

  return (
    // cookItem
    <div className="border-gray-400 border m-4 p-4 w-1/3 rounded-3xl">
      <h1 className="text-xl font-bold p-4 border-b">Want to cook: {count}</h1>
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
          {wantToCookItems.map((cookItem, idx) => (
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
        totalTime={totalTime}
        totalCalories={totalCalories}
      ></Cooking>
    </div>
  );
};

Cook.propTypes = {
  count: PropTypes.number.isRequired,
  cookItems: PropTypes.array.isRequired,
};

export default Cook;
