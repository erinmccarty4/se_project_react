// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom"; // Updated import
import App from "./components/App/App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter> {/* Changed here */}
      <App />
    </HashRouter> {/* Changed here */}
  </React.StrictMode>
);