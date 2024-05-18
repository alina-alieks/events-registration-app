import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.jsx";
import "../node_modules/modern-normalize";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
