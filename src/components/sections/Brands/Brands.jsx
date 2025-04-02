import React from "react";
import Board from "./components/Board/Board";
import Logos from "./components/Logos/Logos";
import Planchette from "./components/Planchette/Planchette";
import Separator from "components/ui/Separator/Separator";
import OverlayFadeUp from "components/ui/OverlayFadeUp/OverlayFadeUp";
import Vignette from "components/ui/Vignette/Vignette";
import "./styles.scss";

export default function Brands() {
  return (
    <section className="brands">
      <div className="brands__content">
        <Board />
        <Logos />
        <Planchette />
        <Vignette />
        <OverlayFadeUp opacity="0.5" />
      </div>
      <Separator />
    </section>
  );
}
