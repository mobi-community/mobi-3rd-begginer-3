import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/layout";
import SignUpPage from "../pages/singUpPage";

const router = createBrowserRouter([
    {
        path: "",
        element: <RootLayout />,
        children: [
            {
                path: "",
                element: <SignUpPage />,
            },
        ],
    },
]);
export default router;
