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
    <div className="restaurant-card w-60 h-auto mx-5 my-1 rounded-lg shadow-lg border p-3">
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

export default RestaurantCard;
