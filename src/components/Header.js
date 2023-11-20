import { useState } from "react";
import { appLogoURL } from "../utils/config";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function toggle() {
    isLoggedIn ? setIsLoggedIn(false) : setIsLoggedIn(true);
  }

  return (
    <div className="header">
      <img className="appLogo" src={appLogoURL} alt="Eat Villa App Logo"></img>
      <ul className="navList">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li>Cart</li>
        {isLoggedIn ? (
          <button onClick={toggle}>Logout</button>
        ) : (
          <button onClick={toggle}>Login</button>
        )}
      </ul>
    </div>
  );
};

export default Header;
