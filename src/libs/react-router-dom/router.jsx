import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../../layouts/layout";
import MultiStepSignUp from "../../pages/multistep-signUp";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <MultiStepSignUp />,
      },
    ],
  },
]);

export default Router;
