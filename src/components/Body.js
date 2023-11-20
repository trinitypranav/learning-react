import RestaurantCard from "./RestaurantCard";
import allRests from "../utils/allRests.json";
import { useEffect, useState } from "react";
import { getAllRestaurantsURL } from "../utils/config";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isFilterOn, setIsFilterOn] = useState(false);

  useEffect(() => {
    getAllRestaurants();
  }, []);

  async function getAllRestaurants() {
    try {
      let data = await fetch(getAllRestaurantsURL);
      let jsonData = await data.json();
      // console.log(jsonData);
      setAllRestaurants(
        jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (e) {
      console.log("getAllRestaurants error " + e);
    }
  }

  return (
    <div className="body">
      <div className="featuresContainer">
        <div className="searchFeature">
          <input
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
        </div>

        <div className="filterFeature">
          <button
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

      <div className="restaurantsContainer">
        {filteredRestaurants?.length === 0 ? (
          <Shimmer />
        ) : (
          filteredRestaurants?.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                <RestaurantCard {...restaurant} />
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Body;
