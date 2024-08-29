import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { AuthForm } from "../components/auth-form";
import Auth from "../views/auth";
import Error from "../components/Error";

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
]);

export default routes;
