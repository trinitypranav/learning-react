import React from "react";
import { cloudinaryImageURL } from "../utils/config";
import { useDispatch } from "react-redux";
import { removeItem } from "../cartSlice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  // console.log(props);
  const { id, name, imageId, price, defaultPrice } = props;
  return (
    <div className="flex restaurant-card w-1/3 m-5 rounded-lg shadow-lg border p-3">
      <img
        className="cardImage w-32 h-32 rounded-lg"
        src={cloudinaryImageURL + imageId}
      ></img>
      <div className="ml-5">
        <h2 className="text-xl font-bold mt-2">{name}</h2>
        <div className="my-2 text-green-600 font-bold">
          {" "}
          ₹ {price ? price / 100 : defaultPrice / 100}
        </div>
        <button
          className="bg-orange-400 p-2 rounded-lg font-normal text-base"
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
