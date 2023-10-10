import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot
import "./index.css";
import App from "./App";

const root = document.getElementById("root");
const rootDOM = createRoot(root); // Create a root instance
rootDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
