/* eslint-disable import/first */
import * as PIXI from "pixi.js";
window.PIXI = PIXI;

import React from "react";
import ReactDOM from "react-dom/client";
import { AppProvider } from "./AppProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider />
  </React.StrictMode>
);
