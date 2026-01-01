import React, { useEffect } from "react";
import PropTypes from "prop-types";
import RecipesCarts from "../RecipesCarts/RecipesCarts";
import Cook from "../Cook/Cook";
import { useState } from "react";
import {
  addCountToLs,
  getStoredCountValue,
  addFoodsToLs,
  getStoredCookItem,
} from "../../../utilities/localStorage";
import { toast } from "react-toastify";

const Recipes = () => {
  const [foods, setFood] = useState([]);
  const [count, setCount] = useState(0);
  const [cookItems, setCookItems] = useState([]);
  const [wantToCookItems, setWantToCookItems] = useState([]);

  useEffect(() => {
    setWantToCookItems(cookItems);
  }, [cookItems]);

  const handleRemoveClickedCookItem = (id) => {
    const remainingItems = wantToCookItems.filter(
      (item) => item.recipe_id !== id
    );
    setWantToCookItems(remainingItems);
  };

  const handleCookDecrease = () => {
    const newCookingCount = count - 1;
    setCount(newCookingCount);
    addCountToLs(newCookingCount);
  };

  useEffect(() => {
    fetch("foods.json")
      .then((res) => res.json())
      .then((data) => setFood(data));
  }, []);

  const handleCookItem = (food) => {
    const newCookItem = [...cookItems, food];
    setCookItems(newCookItem);
    toast.success("Recipe added to Want to Cook !");
  };
  const handleCount = (food) => {
    const isWantToCookAlreadyAdded = cookItems.find(
      (item) => item.recipe_id === food.recipe_id
    );

    if (isWantToCookAlreadyAdded) {
      toast.error("This recipe is already added to Want to Cook !");
      return;
    }

    const newCount = count + 1;
    setCount(newCount);
    addCountToLs(newCount);
    handleCookItem(food);
    addFoodsToLs(food);
  };

  useEffect(() => {
    const storedLsCookItems = getStoredCookItem();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCookItems(storedLsCookItems);
  }, []);

  useEffect(() => {
    const lsStoredCount = getStoredCountValue();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCount(lsStoredCount);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Our Recipes</h1>
      <p className="text-sm my-4 w-2/3 mx-auto font-light">
        Discover our restaurant recipes crafted with fresh ingredients and
        expert techniques to deliver unforgettable flavors. Each dish reflects
        passion, creativity, and a perfect balance of taste that brings
        authentic dining experiences to your table.
      </p>
      <div className="flex flex-col md:flex-row md:gap-10 justify-between">
        <RecipesCarts handleCount={handleCount} foods={foods}></RecipesCarts>
        <Cook
          count={count}
          // cookItems={cookItems}
          wantToCookItems={wantToCookItems}
          handleCookDecrease={handleCookDecrease}
          handleRemoveClickedCookItem={handleRemoveClickedCookItem}
        ></Cook>
      </div>
    </div>
  );
};

Recipes.propTypes = {
  handleCount: PropTypes.func.isRequired,
};

export default Recipes;
