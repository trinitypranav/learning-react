import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cloudinaryImageURL } from "../utils/config";

const RestaurantDetails = () => {
  let { id } = useParams();
  //console.log(id);
  let [restaurantDetails, setRestaurantDetails] = useState({});
  let [restaurantMenu, setRestaurantMenu] = useState([]);

  useEffect(() => {
    getRestaurantDetails(id);
  }, []);

  const getRestaurantDetails = async (id) => {
    let data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.4761852&lng=73.87455469999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    let json = await data.json();
    console.log(json?.data?.cards[0]?.card?.card?.info);
    setRestaurantDetails(json?.data?.cards[0]?.card?.card?.info);
    setRestaurantMenu(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
        (item) => item.card.info.name
      )
    );
  };

  return (
    <div className="restaurantDetailsContainer">
      <div className="restaurantInfo">
        <h1>
          {restaurantDetails.name}{" "}
          <span
            style={{ color: "#4CAF50", fontSize: "large", marginLeft: "5px" }}
          >
            {" "}
            &#9733;{restaurantDetails.avgRating} (
            {restaurantDetails.totalRatingsString})
          </span>
        </h1>
        <img
          className="restaurantImage"
          src={cloudinaryImageURL + restaurantDetails.cloudinaryImageId}
        />
        <h2>
          Area: {restaurantDetails.areaName}, Locality :{" "}
          {restaurantDetails.locality}
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
