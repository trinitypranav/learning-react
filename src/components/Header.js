import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/customHooks/useOnlineStatus";
import appLogo from "../assets/appLogo.png";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function toggle() {
    isLoggedIn ? setIsLoggedIn(false) : setIsLoggedIn(true);
  }

  return (
    <div className="flex flex-col sm:flex-row justify-between pl-2 pt-2 pr-2 pb-5 shadow-md">
      <img className="w-56" src={appLogo} alt="Eat Villa App Logo"></img>
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
          Cart
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
