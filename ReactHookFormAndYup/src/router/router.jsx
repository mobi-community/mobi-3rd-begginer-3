import { createBrowserRouter } from "react-router-dom"
import { Layout } from "./"
import { BirthAndMobile, Comment, IdAndPw } from "../pages"

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "", element: <IdAndPw /> },
      { path: "/birth&moblie", element: <BirthAndMobile /> },
      { path: "/comment", element: <Comment /> },
    ],
  },
])

export default router
