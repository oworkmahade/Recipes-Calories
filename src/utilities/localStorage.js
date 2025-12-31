// get cook count value from local storage
const getStoredCountValue = () => {
  const storedCountValueString = localStorage.getItem("cookItemCount");
  if (storedCountValueString) {
    return JSON.parse(storedCountValueString);
  }
  return 0;
};

// get cooking count value from local storage

const getStoredCookingCountValue = () => {
  const storedCookingCountValueString =
    localStorage.getItem("cookingItemCount");
  if (storedCookingCountValueString) {
    return JSON.parse(storedCookingCountValueString);
  }
  return 0;
};

// get food item from local storage
const getStoredCookItem = () => {
  const getStoredItems = JSON.parse(localStorage.getItem("cookItems")) || [];
  return getStoredItems;
};

// save cook count to Local Store
const saveCountToLs = (count) => {
  const countStringified = JSON.stringify(count);
  localStorage.setItem("cookItemCount", countStringified);
};

// add cook count to local storage
const addCountToLs = (count) => {
  saveCountToLs(count);
};

// save cooking count to LS

const saveCookingCountToLs = (newCount) => {
  const CookingCountStringified = JSON.stringify(newCount);
  localStorage.setItem("cookingItemCount", CookingCountStringified);
};

// add cooking count to local store
const addCookingCountToLs = (newCount) => {
  saveCookingCountToLs(newCount);
};

// add food to local storage
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

const getStoredCookingItems = () => {
  const storedCookingItems =
    JSON.parse(localStorage.getItem("cookingItems")) || [];
  return storedCookingItems;
};

const addCookingFoodToLs = (cookItem) => {
  const storedItems = getStoredCookingItems();
  storedItems.push({
    recipe_name: cookItem.recipe_name,
    preparing_time: cookItem.preparing_time,
    calories: cookItem.calories,
  });

  localStorage.setItem("cookingItems", JSON.stringify(storedItems));
};

export {
  getStoredCountValue,
  addCountToLs,
  addFoodsToLs,
  getStoredCookItem,
  addCookingCountToLs,
  getStoredCookingCountValue,
  addCookingFoodToLs,
  getStoredCookingItems,
};
