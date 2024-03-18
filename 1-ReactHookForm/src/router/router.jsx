import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/layout";
import Main from "../pages/main";

const router = createBrowserRouter([
    {
        path: "",
        element: <RootLayout />,
        children: [
            {
                path: "",
                element: <Main />,
            },
        ],
    },
]);
export default router;
