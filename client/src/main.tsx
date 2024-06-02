import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./layouts/HomePage/HomePage";
import AboutUs from "./layouts/AboutUs";

import RegisterEvents from "./layouts/Events/RegisterEvents"
import Events from "./layouts/Events/EventsHome"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/events",
        children: [
          {
            path: '/events',
            element: <Events />,
          },
          {
            path: '/events/register',
            element: <RegisterEvents />,
          }
        ]
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
