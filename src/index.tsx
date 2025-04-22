import React from "react";
import ReactDOM from "react-dom/client";
import { AppProvider } from "providers/AppProvider";
import "utils/animation/gsapSetup";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <AppProvider />
    </React.StrictMode>
  );
} else {
  throw new Error("Root element not found");
}
