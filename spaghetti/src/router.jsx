import { createBrowserRouter } from "react-router-dom";
import AuthRoute from "./components/AuthRoute";
import HomePage from "./pages/Home";
import PostDetailPage from "./pages/Post.Detail";
import PostListPage from "./pages/Post.List";
import { fetchPostDetailById } from "./utils";

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
        loader: async ({ params }) => {
          const postId = params.postId
          const postDetail = await fetchPostDetailById(postId)
          return { postDetail }
        }
      },
    ]
  }
]);
export default router