import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import Router from "./libs/react-router-dom/router";
import { ThemeProvider } from "@mui/material";
import { theme } from "./tokens/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={Router} />
  </ThemeProvider>
);

reportWebVitals();
