import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layout/layout";
import Main from "../page/main";
import Signup from "../page/signup";

const route = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Main />,
            },
            {
                path: "signup",
                element: <Signup />,
            },
        ],
    },
]);
export default route;
