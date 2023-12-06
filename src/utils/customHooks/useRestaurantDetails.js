import { useEffect, useState } from "react";

const useRestaurantDetails = (id) => {
  let [restaurantDetails, setRestaurantDetails] = useState({});

  useEffect(() => {
    getRestaurantDetails(id);
  }, []);

  const getRestaurantDetails = async (id) => {
    let data = await fetch(
      `https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.4761852&lng=73.87455469999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    let json = await data.json();
    // console.log("sending data " + JSON.stringify(json));
    setRestaurantDetails(json);
  };

  return restaurantDetails;
};

export default useRestaurantDetails;
