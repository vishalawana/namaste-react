import React, { Suspense, lazy } from "react";
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

// ✅ Lazy load the Grocery component
const Grocery = lazy(() => import("./components/Grocery"));
console.log(Grocery);

// ✅ Layout component that wraps around all pages
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
      }
    ]
  }
]);

// ✅ Mount the router to the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
