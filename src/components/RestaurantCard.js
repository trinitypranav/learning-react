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
    <div className="restaurant-card">
      <img
        className="cardImage"
        src={cloudinaryImageURL + cloudinaryImageId}
      ></img>
      <h2>
        {name}
        <span
          style={{ color: "#4CAF50", fontSize: "large", marginLeft: "5px" }}
        >
          &#9733;{avgRating}
        </span>
      </h2>
      <h3>
        {areaName}
        <span
          style={{
            fontSize: "medium",
            fontWeight: "normal",
            marginLeft: "10px",
          }}
        >
          {sla.lastMileTravelString && "(" + sla.lastMileTravelString + ")"}
        </span>
      </h3>
      <div>{totalRatingsString} reviews</div>
      <span style={{ color: "grey" }}>{cuisines.join(", ")} </span> <br></br>
    </div>
  );
};

export default RestaurantCard;
