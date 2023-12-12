import React, { useState } from "react";
import RestaurantItemsList from "./RestaurantItemsList";

const RestaurantCategory = ({ category, showItems, setShowItems }) => {
  // console.log(category);
  // const [showItems, setShowItems] = useState(false);
  return (
    <div className="p-2 m-1 justify-between">
      <div
        className="flex justify-between bg-gray-100"
        onClick={() => {
          setShowItems();
        }}
      >
        <span>
          <div className="p-2">{category.title}</div>
        </span>
        <span>
          <button className="m-2">⬇️</button>
        </span>
      </div>
      {showItems && <RestaurantItemsList items={category.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
