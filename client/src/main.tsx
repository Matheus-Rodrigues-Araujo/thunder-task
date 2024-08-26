import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import Auth from "./pages/Auth.tsx";

import { AuthForm } from "./components/auth-form/index.tsx";
import Error from "./components/Error.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/",
    element: <Auth />,
    children: [
      {
        path: "sign-in",
        element: <AuthForm type="sign-in" />,
      },
      {
        path: "sign-up",
        element: <AuthForm type="sign-up" />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
