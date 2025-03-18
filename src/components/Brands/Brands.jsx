import React from "react";
import "./brands.scss";
import Logos from "./components/Logos";
import Wallpaper from "components/Wallpaper/Wallpaper";
import Planchette from "./components/Planchette/Planchette";
import Board from "./components/Board/Board";

export default function Brands() {
  return (
    <div className="brands">
      <div className="container brands__container">
        <Wallpaper />
        <Board />
        <Logos />
        <Planchette />
      </div>
    </div>
  );
}
