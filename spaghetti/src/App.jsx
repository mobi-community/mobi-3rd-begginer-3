import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { worker } from "./__mock__/browser";
import "./app.css";
import { FETCH_POINT_DATA_LIST } from "./constants";
import DiaLogProvider from "./contexts/DialogProvider";
import HomePage from "./pages/Home";
import PostDetailPage from "./pages/Post.Detail";
import PostListPage from "./pages/Post.List";
import { fetchDataListAndPagination } from "./utils/fetch";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    {
      path: "/posts",
      element: <PostListPage />,
      loader: async () => {
        const response = await fetchDataListAndPagination({
          endpoints: FETCH_POINT_DATA_LIST.POST,
          take: 10,
        })
        return response
      }
  
  
  
    },
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
