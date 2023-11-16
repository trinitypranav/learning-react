import RestaurantCard from "./RestaurantCard";
import allRests from "../utils/allRests.json";
import { useState } from "react";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState(allRests);
  return (
    <div className="body">
      <div className="searchFeature">
        <input
          className="searchbar"
          type="text"
          value={searchText}
          onChange={(e) => {
            e.stopPropagation();
            setSearchText(e.target.value);
          }}
        />

        <button
          onClick={() => {
            if (searchText.length == 0) {
              setAllRestaurants(allRests);
              return;
            }
            const filtered = allRestaurants.filter((restaurant) =>
              restaurant.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );
            setAllRestaurants(filtered);
          }}
        >
          Search
        </button>

        <button
          onClick={() => {
            setAllRestaurants(allRests);
          }}
        >
          Show All
        </button>

        <button
          onClick={() => {
            const filtered = allRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4.2
            );
            setAllRestaurants(filtered);
          }}
        >
          Filter 4.2+ Rating
        </button>
      </div>

      <div className="restaurantsContainer">
        {allRestaurants.map((restaurant) => {
          return <RestaurantCard key={restaurant.info.id} {...restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
