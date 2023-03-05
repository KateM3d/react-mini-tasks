import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import MemoryGame from "./components/memory-game/MemoryGame";
import Dropdown from "./components/multi-select-dwopdown/Dropdown";
import TreeStructure from "./components/tree-structure/TreeStructure";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/tree",
    element: <TreeStructure />,
  },
  {
    path: "/memory",
    element: <MemoryGame />,
  },
  {
    path: "/dropdown",
    element: <Dropdown />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
