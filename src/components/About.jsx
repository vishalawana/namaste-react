import React, { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  render() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-lg text-gray-600 max-w-2xl text-center leading-relaxed">
          Welcome to our food delivery app! We are passionate about delivering fresh, delicious meals
          right to your doorstep. Our mission is to make your dining experience easy, fast, and
          delightful.
        </p>
        <div>
          <UserContext.Consumer>
            {(data)=>data.loggedInUser}
          </UserContext.Consumer>
        </div>
      </div>
    );
  }
}

export default About;
