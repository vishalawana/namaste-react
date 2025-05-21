import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu"

// Layout component that wraps all pages
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <div className="body">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};


// Main/home content
const Home = () => {
  return <Body />;
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home /> // Homepage
      },
      {
        path: "about", // ✅ No leading slash needed
        element: <About />
      },
      {
        path: "contact", // ✅ No leading slash needed
        element: <Contact />
      },
      {
        path: "restaurant/:resId",
        element: <RestaurantMenu/>
      }
    ]
  }
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
