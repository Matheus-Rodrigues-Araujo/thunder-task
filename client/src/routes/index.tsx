import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { AuthForm } from "../components/auth-form";
import Auth from "../views/auth";
import Error from "../views/error";
import Dashboard from "../views/dashboard";

const routes = createBrowserRouter([
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
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "projects",
        element: <h1 className="text-black 4xl">Projects</h1>,
      },
      {
        path: "teams",
        element: <h1 className="text-black 4xl">Teams</h1>,
      },
      {
        path: "calendar",
        element: <h1 className="text-black 4xl">Calendar</h1>,
      },
      {
        path: "profile",
        element: <h1 className="text-black 4xl"> Profile</h1>,
      },
      {
        path: "help",
        element: <h1 className="text-black 4xl"> Help</h1>,
      },
    ],
  },
]);

export default routes;
