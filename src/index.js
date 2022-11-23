import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Section2 from "./component/page1/section2/Section2";
import Sale from "./component/sale-component/Sale";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Sale />
    <Section2/>
  </React.StrictMode>
);
