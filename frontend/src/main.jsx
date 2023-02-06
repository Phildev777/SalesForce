import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import RouteAdmin from "@components/RouteAdmin";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RouteAdmin />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
