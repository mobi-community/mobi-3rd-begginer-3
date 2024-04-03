import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./app.css";
import HomePage from "./pages/Home";
import DiaLogProvider from "./contexts/DialogProvider";
import { worker } from "./__mock__/browser";
import store from "./libs/redux/store";
import PostListPage from "./pages/Post.List";
import PostDetailPage from "./pages/Post.Detail";

function App() {
    const router = createBrowserRouter([
        { path: "/", element: <HomePage /> },
        { path: "/posts", element: <PostListPage /> },
        { path: "/post-detail/:postId", element: <PostDetailPage /> },
    ]);
    worker.start();

    return (
        <Provider store={store}>
            <DiaLogProvider>
                <RouterProvider router={router} />
            </DiaLogProvider>
        </Provider>
    );
}

export default App;
