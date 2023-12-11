import React from "react";
import { cloudinaryImageURL } from "../utils/config";
import { useDispatch } from "react-redux";
import { addItem } from "../cartSlice";

const RestaurantItemsList = ({ items }) => {
  // console.log(items);
  const dispatch = useDispatch();
  return items.map((item) => (
    <div key={item.card.info.id} className="flex mx-4 border-b-2">
      <div className="w-2/12 p-2">
        <button
          className="bg-green-600 absolute w-6 h-6 rounded-lg"
          onClick={() => {
            dispatch(addItem(item.card.info));
          }}
        >
          {"＋"}
        </button>
        <img
          className="rounded-lg"
          src={cloudinaryImageURL + item.card.info.imageId}
        />
      </div>
      <div className="w-9/12 py-4 mx-4 self-center">
        <h1 className="font-bold text-xl">
          {item.card.info.name} {item.card.info.isVeg ? "☘️" : "🍗"}
        </h1>
        <h2 className="text-sm">{item.card.info.description}</h2>
        <p className="">
          ₨{" "}
          {item.card.info.price
            ? item.card.info.price / 100
            : item.card.info.defaultPrice / 100}
        </p>
      </div>
    </div>
  ));
};

export default RestaurantItemsList;
