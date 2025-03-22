import React from "react";
import Board from "./components/Board/Board";
import Logos from "./components/Logos/Logos";
import Planchette from "./components/Planchette/Planchette";
import Separator from "components/ui/Separator/Separator";
import Vignette from "components/ui/Vignette/Vignette";
import Wallpaper from "components/ui/Wallpaper/Wallpaper";
import "./styles.scss";

export default function Brands() {
  return (
    <section className="brands">
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
      <Separator />
    </section>
  );
}
