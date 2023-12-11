import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cloudinaryImageURL } from "../utils/config";
import useRestaurantDetails from "../utils/customHooks/useRestaurantDetails";
import { useDispatch } from "react-redux";
import { addItem } from "../cartSlice";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantDetails = () => {
  let { id } = useParams();
  const dispatch = useDispatch();

  let restaurantDetails = {};
  let restaurantMenu = [];
  let json = useRestaurantDetails(id);
  // console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  restaurantDetails = json?.data?.cards[0]?.card?.card?.info;
  // restaurantMenu =
  //   json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
  //     (item) => {
  //       return item.card.info;
  //     }
  //   );
  restaurantMenu =
    json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (category) => {
        return (
          category.card.card["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );
  // console.log(restaurantMenu);

  return (
    <div className="restaurantDetailsContainer flex flex-wrap m-5">
      <div className="restaurantInfo p-5 w-4/12">
        <h1 className="text-xl font-bold">
          {restaurantDetails?.name}{" "}
          <span className="text-green-600 text-lg ml-2">
            {" "}
            &#9733;{restaurantDetails?.avgRating} (
            {restaurantDetails?.totalRatingsString})
          </span>
        </h1>
        <img
          className="restaurantImage my-5 rounded-lg w-52"
          src={cloudinaryImageURL + restaurantDetails?.cloudinaryImageId}
        />
        <h2 className="text-lg font-bold">
          Area: {restaurantDetails?.areaName}, Locality :{" "}
          {restaurantDetails?.locality}
        </h2>
        <span>Cuisines: {restaurantDetails?.cuisines?.join(", ")}</span> <br />
        <span> {restaurantDetails?.costForTwoMessage}</span> <br />
        <span className="italic text-sm">
          {" "}
          {restaurantDetails?.feeDetails?.message}
        </span>{" "}
        <br />
      </div>
      {/* Menu */}
      <div className="restaurantMenu ml-5 w-7/12">
        <h1 className="text-xl font-bold my-5">Menu</h1>
        <div className="list-disc">
          {restaurantMenu?.map((category, index) => (
            <RestaurantCategory
              key={category.card.card.title}
              category={category.card.card}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
