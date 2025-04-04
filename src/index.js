/* eslint-disable import/first */
import * as PIXI from "pixi.js";
window.PIXI = PIXI; // 👈 Must happen before anything else imports @pixi/react

import React from "react";
import ReactDOM from "react-dom/client";
import { AppProvider } from "App/AppProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider />
  </React.StrictMode>
);
