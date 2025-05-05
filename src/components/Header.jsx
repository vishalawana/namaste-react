
import {useState} from "react";
const Header = () => {
  let [btnName,setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src='https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-food-logo-png-image_5297921.png' 
        alt="food Logo" />
      </div>
      
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <button className='login' onClick = {() => {
           setBtnName(btnName === 'Login' ? 'Logout' : 'Login');
          }
          }>{btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header; 