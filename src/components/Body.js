import RestaurantCard, { addOpenLabel } from "./RestaurantCard";
import allDummyRestaurants from "../utils/allDummyRestaurants.json";
import { useEffect, useState } from "react";
import { getAllRestaurantsURL } from "../utils/config";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import OfflinePage from "./OfflinePage";
import useOnlineStatus from "../utils/customHooks/useOnlineStatus";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isFilterOn, setIsFilterOn] = useState(false);
  const RestaurantCardOpen = addOpenLabel(RestaurantCard);

  useEffect(() => {
    getAllRestaurants();
  }, []);

  async function getAllRestaurants() {
    try {
      let data = await fetch(getAllRestaurantsURL);
      let jsonData = await data.json();
      // console.log(
      //   jsonData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle
      //     ?.restaurants
      // );
      if (
        jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants == undefined
      ) {
        setAllRestaurants(allDummyRestaurants);
        setFilteredRestaurants(allDummyRestaurants);
        return;
      }
      setAllRestaurants(
        jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (e) {
      console.log("getAllRestaurants error " + e);
    }
  }

  return !useOnlineStatus() ? (
    <OfflinePage />
  ) : (
    <div className="body">
      <div className="featuresContainer flex flex-wrap flex-col sm:flex-row justify-between p-2 m-2">
        <div className="searchFeature p-1 text-lg">
          <input
            className="hover:bg-orange-50 focus:outline-none focus:bg-orange-50 shadow-md border p-2 rounded-lg"
            type="text"
            value={searchText}
            onChange={(e) => {
              e.stopPropagation();
              if (e.target.value == "") {
                setFilteredRestaurants(allRestaurants);
              }
              setSearchText(e.target.value);
            }}
          />

          <button
            className="ml-2 hover:bg-orange-50 shadow-md py-2 px-5 rounded-lg"
            onClick={() => {
              if (searchText.length == 0) {
                setFilteredRestaurants(allRestaurants);
                return;
              }
              const filtered = allRestaurants.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filtered);
            }}
          >
            Search
          </button>
          <span className="ml-5 text-base italic">
            {" "}
            {filteredRestaurants.length} Restaurant(s){" "}
          </span>
        </div>

        <div className="filterFeature flex flex-wrap p-2 justify-between">
          <button
            className="px-3 py-1 hover:bg-orange-50 m-2 rounded-lg shadow-md"
            onClick={() => {
              if (isFilterOn) {
                setIsFilterOn(false);
                setFilteredRestaurants(allRestaurants);
                return;
              }
              const filtered = allRestaurants?.filter(
                (restaurant) => restaurant?.info?.avgRating > 4
              );
              setIsFilterOn(true);
              setFilteredRestaurants(filtered);
            }}
          >
            Filter 4+ Rating
          </button>
          <button
            className="px-3 py-1 hover:bg-orange-50 m-2 rounded-lg shadow-md"
            onClick={() => {
              if (isFilterOn) {
                setIsFilterOn(false);
                setFilteredRestaurants(allRestaurants);
                return;
              }
              const filtered = allRestaurants.filter((restaurant) => {
                console.log(restaurant.info);
                return restaurant.info.totalRatingsString === "10K+";
              });
              setIsFilterOn(true);
              setFilteredRestaurants(filtered);
            }}
          >
            10K+ Reviews
          </button>
          <button
            className="px-3 py-1 hover:bg-orange-50 m-2 rounded-lg shadow-md"
            onClick={() => {
              if (isFilterOn) {
                setIsFilterOn(false);
                setFilteredRestaurants(allRestaurants);
                return;
              }
              const filtered = allRestaurants.filter(
                (restaurant) => restaurant.info.sla.lastMileTravel < 3
              );
              setIsFilterOn(true);
              setFilteredRestaurants(filtered);
            }}
          >
            Nearest
          </button>
        </div>
      </div>

      <div className="restaurantsContainer flex flex-wrap justify-center px-5">
        {filteredRestaurants?.length === 0 ? (
          <Shimmer />
        ) : (
          filteredRestaurants?.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                {restaurant.info.isOpen ? (
                  <RestaurantCardOpen {...restaurant} />
                ) : (
                  <RestaurantCard {...restaurant} />
                )}
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Body;
