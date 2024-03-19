import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../../layouts/layout";
import SignUp from "../../components/signUp";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <SignUp />,
      },
    ],
  },
]);

export default Router;
