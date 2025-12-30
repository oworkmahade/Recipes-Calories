// get count value from local storage
const getStoredCountValue = () => {
  const storedCountValueString = localStorage.getItem("cookItem");
  if (storedCountValueString) {
    return JSON.parse(storedCountValueString);
  }
  return 0;
};

// get food item from local storage
const getStoredCookItem = () => {
  const getStoredItems = JSON.parse(localStorage.getItem("cookItems")) || [];
  return getStoredItems;
};

// save count to Local Store
const saveCountToLs = (count) => {
  const countStringified = JSON.stringify(count);
  localStorage.setItem("cookItem", countStringified);
};

// add count to local storage
const addCountToLs = (count) => {
  saveCountToLs(count);
};

// add count to local storage
const addFoodsToLs = (food) => {
  //   console.log(food.recipe_name, food.preparing_time, food.calories);
  const storedItems = getStoredCookItem();
  storedItems.push({
    recipe_name: food.recipe_name,
    preparing_time: food.preparing_time,
    calories: food.calories,
  });

  localStorage.setItem("cookItems", JSON.stringify(storedItems));
};

export { getStoredCountValue, addCountToLs, addFoodsToLs, getStoredCookItem };
