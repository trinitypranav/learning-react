import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import RestaurantDetails from "./components/RestaurantDetails";
import Shimmer from "./components/Shimmer";
import store from "./store";
import Cart from "./components/Cart";
// import About from "./components/About";
// import Contact from "./components/Contact";

// Lazy Loading, Code Splitting, Chunking of About and Contact
const About = lazy(() => import("./components/About")); // returning import() is important here
const Contact = lazy(() => import("./components/Contact"));

const App = () => {
  //className="box-content m-0 p-0 font"
  return (
    <div className="box-content m-0 p-0">
      <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </div>
  );
};

const appRouter = createBrowserRouter(
  [
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
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/restaurant/:id",
          element: <RestaurantDetails />,
        },
      ],
    },
  ]
  // { basename: "/learning-react" }
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={appRouter} />);
