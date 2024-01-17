import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Home from "./Home.tsx";
import SignIn from "./Signin.tsx";
import "./index.css";
import SignUp from "./Signup.tsx";
import Repair from "./Repair.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/project-uni",
        element: <Home />,
      },
      {
        path: "/project-uni/sign",
        element: <SignIn />,
      },
      {
        path: "/project-uni/signup",
        element: <SignUp />,
      },
      {
        path: "/project-uni/repair/:id",
        element: <Repair />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
