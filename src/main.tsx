import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Router } from "@reach/router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App path="/*" />
    </Router>
  </React.StrictMode>
);
