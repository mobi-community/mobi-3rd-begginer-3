import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/layout";
import SignupPage from "../pages/signup/signupPage";

const router = createBrowserRouter([
    {
        path: "",
        element: <RootLayout />,
        children: [
            {
                path: "",
                element: <SignupPage />,
            },
        ],
    },
]);
export default router;
