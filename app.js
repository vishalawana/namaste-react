import React from 'react';
import ReactDOM from 'react-dom/client';


const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img
        className="logo"
        src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
        alt="Logo"
      />
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
 );
 const RestaurantCard = ({resName = 'NA', cuisine = 'NA'}) => {
  // console.log(props);
  return (
  <div className="restaurant-card">
    <img className="restaurant-logo" src="https://www.bdtask.com/blog/assets/plugins/ckfinder/core/connector/php/uploads/images/quick-pancake.webp"
       alt="res-logo"
     />
     <h3>{resName }</h3>
     <h4>{cuisine}</h4>
  </div>
 );
}
 const Body = () => (
  <div className="body">
    <div className="search">search</div>
    <div className="restaurant-container">
      <RestaurantCard
      resName="Meghna Food"
      cuisine="Biryani, North Indian, Asian"
      />
      <RestaurantCard resName="KFC" cuisine="Chicken, Special Indian, Asian" />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
  </div>
 )
 const AppLayout = () =>{
  return(
    <div className="app">
      <Header/>
      <Body/>
    </div>
  )
 }
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<AppLayout/>);