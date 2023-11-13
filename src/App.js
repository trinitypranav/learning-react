import React from "react";
import allRests from "./allRests.json";
// app layout component
// header
// - logo
// - navList - About, Contact, Cart
// body
// - search
// - restaurantsContainer
//     - restaurantCard (many)
// - Image
// - Name
// - Cuisines
// - Rating
// footer

const Header = () => {
  return (
    <div className="header">
      <img
        className="appLogo"
        src="https://img.squadhelp.com/story_images/visual_images/1636519228-eatvilla.png?class=show"
      ></img>
      <ul className="navList">
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};
let obj = {
  image:
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7",
  name: "Pizza Hut",
  cuisines: ["Pizza", "American"],
  rating: "4.2 stars",
};
const RestaurantCard = (props) => {
  console.log(props.info);
  let { name, areaName, cuisines, cloudinaryImageId, avgRating } = props.info;
  return (
    <div className="card">
      <img
        className="cardImage"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      ></img>
      <h2>{name}</h2>
      <h3>{areaName}</h3>
      <span>{cuisines.join(", ")} </span> <br></br>
      <span>{avgRating} stars</span>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurantsContainer">
      {allRests.map((restaurant) => {
        return <RestaurantCard key={restaurant.info.id} {...restaurant} />;
      })}
    </div>
  );
};
const App = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

export default App;
