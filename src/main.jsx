import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import ProjectDetails from "./Components/Projects/ProjectDetails.jsx";
import RootLayOut from "./LayOut/RootLayOut.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayOut />,
    children:[
      {
        index: true,
        element: <App />
      },
      {
        path: "project/:projectId",
        element: <ProjectDetails />
      }
    ]
  },

]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

