import { createBrowserRouter } from "react-router-dom";
import AuthRoute from "./components/AuthRoute";
import HomePage from "./pages/Home";
import PostDetailPage from "./pages/Post.Detail";
import PostListPage from "./pages/Post.List";

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
        element: <PostDetailPage />
      },
    ]
  }
]);
export default router