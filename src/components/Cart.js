import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../cartSlice";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  // console.log("store contains" + items);
  return (
    <div className="m-5 text-2xl font-bold">
      <h1>
        Cart Details
        <button
          className="text-base font-normal bg-orange-400 p-2 rounded-lg ml-4"
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          Clear Cart
        </button>
      </h1>
      <div className="flex flex-wrap justify-evenly">
        {items.length !== 0 &&
          items.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
      </div>
    </div>
  );
};

export default Cart;
