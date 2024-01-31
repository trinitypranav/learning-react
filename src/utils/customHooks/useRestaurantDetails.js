import { useEffect, useState } from "react";
import { getRestaurantByIdURL } from "../config";

const useRestaurantDetails = (id) => {
  let [restaurantDetails, setRestaurantDetails] = useState({});

  useEffect(() => {
    getRestaurantDetails(id);
  }, []);

  const getRestaurantDetails = async (id) => {
    let data = await fetch(getRestaurantByIdURL + id);
    let json = await data.json();
    console.log("data for rest id ", json);
    // json = JSON.parse(json);
    // console.log("sending data " + JSON.stringify(json));
    setRestaurantDetails(json);
  };

  return restaurantDetails;
};

export default useRestaurantDetails;
