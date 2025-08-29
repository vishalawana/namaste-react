import React, { Suspense, lazy, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { useEffect, useState} from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


// ✅ Lazy load the Grocery component
const Grocery = lazy(() => import("./components/Grocery"));

// ✅ Layout component that wraps around all pages
const AppLayout = () => {

  const [userName, setUserName] = useState();
  useEffect(()=>{
    // make an api call
    const data = {
      name:"vishal awana"
    };
    setUserName(data.name)
  },[])


  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser : userName}}>
      <div className="app">
        <Header />
        <div className="body pt-20">
          <Outlet />
        </div>
        <Footer />
      </div>
      </UserContext.Provider>
    </Provider>
  );
};


// ✅ Home component (main content)
const Home = () => {
  return <Body />;
};

// ✅ Define all routes
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "grocery",
        element: (
          <Suspense fallback={<h2>Loading Grocery...</h2>}>
            <Grocery />
          </Suspense>
        )
      },
      {
        path: "restaurant/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "cart",
        element: <Cart/>
      }
    ]
  }
]);

// ✅ Mount the router to the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
