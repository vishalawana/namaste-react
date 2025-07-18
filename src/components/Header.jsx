import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus  from "../utils/useOnlineStatus";
import Grocery from "../components/Grocery";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus(true)
  console.log(onlineStatus);

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-food-logo-png-image_5297921.png"
          alt="food Logo"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Status: { onlineStatus? 'online':'offline' }</li>
          <li><button><Link to="/grocery">Grocery</Link></button></li>
        </ul>
        <button
          className="login"
          onClick={() =>
            setBtnName(btnName === "Login" ? "Logout" : "Login")
          }
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default Header;
