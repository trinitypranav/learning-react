import RestaurantCard from "./RestaurantCard";
import allRests from "../utils/allRests.json";

const Body = () => {
  return (
    <div className="restaurantsContainer">
      {allRests.map((restaurant) => {
        return <RestaurantCard key={restaurant.info.id} {...restaurant} />;
      })}
    </div>
  );
};

export default Body;
