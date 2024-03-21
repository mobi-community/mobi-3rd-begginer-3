import { RouterProvider } from "react-router-dom";

import { worker } from "./__mock__/browser";
import "./app.css";
import DiaLogProvider from "./contexts/DialogProvider";

function App() {
  worker.start();

  return (
    <DiaLogProvider>
      <RouterProvider router={router} />
    </DiaLogProvider>
  );
}

export default App;
