// get count value from local storage
const getStoredCountValue = () => {
  const storedCountValueString = localStorage.getItem("cookItem");
  if (storedCountValueString) {
    return JSON.parse(storedCountValueString);
  }
  return 0;
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

export { getStoredCountValue, addCountToLs };
