import { cloudinaryImageURL } from "../utils/config";

const RestaurantCard = (props) => {
  // console.log(props.info);
  let {
    name,
    areaName,
    cuisines,
    cloudinaryImageId,
    avgRating,
    totalRatingsString,
    sla,
  } = props.info;
  return (
    <div data-testid="card" className="restaurant-card w-60 h-auto mx-5 my-1 rounded-lg shadow-lg border p-3">
      <img
        className="cardImage w-full h-60 rounded-lg"
        src={cloudinaryImageURL + cloudinaryImageId}
      ></img>
      <h2 className="text-xl font-bold mt-2">
        {name}
        <span className="ml-2 text-green-500 text-lg">&#9733;{avgRating}</span>
      </h2>
      <h3>
        {areaName}
        <span className="ml-2 text-sm">
          {sla.lastMileTravelString && "(" + sla.lastMileTravelString + ")"}
        </span>
      </h3>
      <div>{totalRatingsString} reviews</div>
      <span className="text-gray-400 italic text-sm">
        {cuisines.join(", ")}{" "}
      </span>{" "}
      <br></br>
    </div>
  );
};

// Higher Order Component
export const addOpenLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-400 p-2 rounded-lg text-sm ml-3">
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
