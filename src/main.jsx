import React from "react";
import ReactDOM from "react-dom/client";
import {app} from "./firebaseConfig"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* // We need to feed the router to the router provider so we don't need <App /> we can bypass the app.jsx*/}
  </React.StrictMode>
);
