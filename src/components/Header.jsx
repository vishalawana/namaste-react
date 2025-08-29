import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus(true);
  // const data = useContext(UserContext);
  const cartItems = useSelector((store)=> store.cart.items);
  return (
    <header className="w-full bg-gray-200 shadow-md fixed top-0 left-0 z-50 px-6 py-3 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <img
          className="w-14 h-14 rounded-full cursor-pointer"
          src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-food-logo-png-image_5297921.png"
          alt="food Logo"
        />
      </div>

      {/* Navigation */}
      <nav className="flex items-center space-x-6">
        <ul className="flex space-x-6 text-lg font-medium text-gray-700">
          <li className="hover:text-orange-500">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-orange-500">
            <Link to="/about">About Us</Link>
          </li>
          <li className="hover:text-orange-500">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="hover:text-orange-500">
            <Link to="/cart">Cart {cartItems.length}</Link>
          </li>
          <li className="hover:text-orange-500">
            Status:{" "}
            <span className={onlineStatus ? "text-green-600" : "text-red-600"}>
              {onlineStatus ? "online" : "offline"}
            </span>
          </li>
          <li>
            <button className="px-4 py-1 rounded-lg bg-orange-500 text-white hover:bg-black transition">
              <Link to="/grocery">Grocery</Link>
            </button>
          </li>
        </ul>

        {/* Login/Logout Button */}
        <button
          className="ml-4 px-4 py-1 rounded-lg bg-red-500 text-white hover:bg-red-700 transition"
          onClick={() =>
            setBtnName(btnName === "Login" ? "Logout" : "Login")
          }
        >
          {btnName}
        </button>
      </nav>
    </header>
  );
};

export default Header;
