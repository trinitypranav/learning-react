import { cloudinaryImageURL } from "../utils/config";

const RestaurantCard = (props) => {
  console.log(props.info);
  let { name, areaName, cuisines, cloudinaryImageId, avgRating } = props.info;
  return (
    <div className="card">
      <img
        className="cardImage"
        src={cloudinaryImageURL + cloudinaryImageId}
      ></img>
      <h2>{name}</h2>
      <h3>{areaName}</h3>
      <span>{cuisines.join(", ")} </span> <br></br>
      <span>{avgRating} stars</span>
    </div>
  );
};

export default RestaurantCard;
