import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import PostDetailPage from "../pages/Post.Detail";
import PostListPage from "../pages/Post.List";
import AuthRoute from "./Auth.Route";
import { postDetailLoader } from "./loader";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>
  },
  {
    path: '/',
    element: <AuthRoute />,
    children: [
      {
        path: "/posts",
        element: <PostListPage />,
      },
      {
        path: "/post-detail/:postId",
        element: <PostDetailPage />,
        loader: postDetailLoader
      },
    ]
  }
]);
export default router