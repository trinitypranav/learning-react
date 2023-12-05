import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import RestaurantDetails from "./components/RestaurantDetails";
import Shimmer from "./components/Shimmer";
// import About from "./components/About";
// import Contact from "./components/Contact";

// Lazy Loading, Code Splitting, Chunking of About and Contact
const About = lazy(() => import("./components/About")); // returning import() is important here
const Contact = lazy(() => import("./components/Contact"));

const App = () => {
  //className="box-content m-0 p-0 font"
  return (
    <React.Fragment className="box-content m-0 p-0 font">
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetails />,
      },
    ],
  },
]);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={appRouter} />);
