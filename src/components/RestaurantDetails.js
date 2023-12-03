import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cloudinaryImageURL } from "../utils/config";
import useRestaurantDetails from "../utils/customHooks/useRestaurantDetails";
import Shimmer from "./Shimmer";

const RestaurantDetails = () => {
  let { id } = useParams();

  let restaurantDetails = {};
  let restaurantMenu = [];
  let json = useRestaurantDetails(id);
  restaurantDetails = json?.data?.cards[0]?.card?.card?.info;
  restaurantMenu =
    json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
      (item) => {
        return item.card.info.name;
      }
    );

  return (
    <div className="restaurantDetailsContainer">
      <div className="restaurantInfo">
        <h1>
          {restaurantDetails?.name}{" "}
          <span
            style={{ color: "#4CAF50", fontSize: "large", marginLeft: "5px" }}
          >
            {" "}
            &#9733;{restaurantDetails?.avgRating} (
            {restaurantDetails?.totalRatingsString})
          </span>
        </h1>
        <img
          className="restaurantImage"
          src={cloudinaryImageURL + restaurantDetails?.cloudinaryImageId}
        />
        <h2>
          Area: {restaurantDetails?.areaName}, Locality :{" "}
          {restaurantDetails?.locality}
        </h2>
        <span>Cuisines: {restaurantDetails?.cuisines?.join(", ")}</span> <br />
        <span> {restaurantDetails?.costForTwoMessage}</span> <br />
        <span> {restaurantDetails?.feeDetails?.message}</span> <br />
      </div>
      <div className="restaurantMenu">
        <h1>Menu</h1>
        <ul>
          {restaurantMenu?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantDetails;
