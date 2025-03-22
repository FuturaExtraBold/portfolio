import React from "react";
import "./brands.scss";
import Logos from "./components/Logos/Logos";
import Planchette from "./components/Planchette/Planchette";
import Board from "./components/Board/Board";
import Vignette from "components/ui/Vignette/Vignette";
import Wallpaper from "components/ui/Wallpaper/Wallpaper";

export default function Brands() {
  return (
    <div className="brands">
      <div className="container brands__container">
        <Wallpaper />
        <Vignette opacity="0.3" />
        <Board />
        <Logos />
        <Planchette />
      </div>
      <div className="layout-test-specs">
        Brand Quilt
        <br />
        1440 x 800 (9:5)
      </div>
    </div>
  );
}
