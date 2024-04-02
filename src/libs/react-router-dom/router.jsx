import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../../layouts/layout";
import MultiStepSignUp from "../../pages/multistep-signUp";
import RHFStep from "../../components/rhfStep1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <MultiStepSignUp />,
      },
      {
        path: "/rhf-step",
        element: <RHFStep />,
      },
    ],
  },
]);

export default router;
