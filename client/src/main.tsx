import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./layouts/HomePage/HomePage";
import AboutUs from "./layouts/AboutUs";

const router = createBrowserRouter([
  {
    path: "/somos/",
    element: <App />,
    children: [
      {
        path: "/somos/",
        element: <HomePage />,
      },
      {
        path: "/somos/about",
        element: <AboutUs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
