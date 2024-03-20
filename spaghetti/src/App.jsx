import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { worker } from "./__mock__/browser";
import "./app.css";
import DiaLogProvider from "./contexts/DialogProvider";
import HomePage from "./pages/Home";
import PostDetailPage from "./pages/Post.Detail";
import PostListPage from "./pages/Post.List";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/posts", element: <PostListPage /> },
    { path: "/post-detail/:postId", element: <PostDetailPage /> },
  ]);
  worker.start();

  return (
    <DiaLogProvider>
      <RouterProvider router={router} />
    </DiaLogProvider>
  );
}

export default App;
