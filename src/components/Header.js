import { appLogoURL } from "../utils/config";

const Header = () => {
  return (
    <div className="header">
      <img className="appLogo" src={appLogoURL}></img>
      <ul className="navList">
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Header;
