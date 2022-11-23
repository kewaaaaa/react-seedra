import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Sale from "./component/sale-component/Sale";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Sale />
  </React.StrictMode>
);
