import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/customHooks/useOnlineStatus";
import appLogo from "../assets/appLogo.png";
import { useSelector } from "react-redux";
// import scooter from "../assets/scooter.png";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let cartCount = useSelector((state) => state.cart.items.length);

  // const scooterRef = useRef(null);

  // useEffect(() => {
  //   setTimeout(() => {
  //     scooterRef.current.style.transform = "translateX(1000px)";
  //     scooterRef.current.style.transition = "transform 4s ease-in-out";
  //     scooterRef.current.src = scooter;
  //   }, 1000);
  // }, []);

  function toggle() {
    isLoggedIn ? setIsLoggedIn(false) : setIsLoggedIn(true);
  }
  return (
    <div className="flex flex-col sm:flex-row justify-between p-2 shadow-md">
      <img className="w-56" src={appLogo} alt="Eat Villa App Logo"></img>
      {/* <img
        id="scooter"
        className="w-20"
        ref={scooterRef}
        src={scooter}
        alt="scooter"
      ></img> */}
      <ul className="flex flex-wrap items-center">
        <li className="p-5 text-lg">
          Online Status: {useOnlineStatus() ? "🟢" : "🔴"}
        </li>
        <li className="px-3 py-1 mx-2 shadow-md text-lg hover:bg-orange-50 rounded-lg">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="px-3 py-1 mx-2 shadow-md text-lg hover:bg-orange-50 rounded-lg ">
          <Link to={"/about"}>About</Link>
        </li>
        <li className="px-3 py-1 mx-2 shadow-md text-lg hover:bg-orange-50 rounded-lg ">
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li className="px-3 py-1 mx-2 shadow-md text-lg hover:bg-orange-50 rounded-lg ">
          <Link to={"/cart"}>
            Cart{" "}
            <span className="text-orange-400">{cartCount + " item(s)"} </span>
          </Link>
        </li>
        {isLoggedIn ? (
          <button
            className="px-3 py-1 mx-2 shadow-md text-lg hover:bg-orange-50 rounded-lg "
            onClick={toggle}
          >
            Logout
          </button>
        ) : (
          <button
            className="px-3 py-1 mx-2 shadow-md text-lg hover:bg-orange-50 rounded-lg "
            onClick={toggle}
          >
            Login
          </button>
        )}
      </ul>
    </div>
  );
};

export default Header;
