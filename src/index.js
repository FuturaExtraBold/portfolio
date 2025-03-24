import React from "react";
import ReactDOM from "react-dom/client";
import { AppProvider } from "AppProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider />
  </React.StrictMode>
);
