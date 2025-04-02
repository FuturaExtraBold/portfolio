import React from "react";
import Board from "./components/Board/Board";
import Logos from "./components/Logos/Logos";
import Planchette from "./components/Planchette/Planchette";
import Separator from "components/ui/Separator/Separator";
import OverlayFadeUp from "components/ui/OverlayFadeUp/OverlayFadeUp";
import Vignette from "components/ui/Vignette/Vignette";
import "./styles.scss";
import SectionHeader from "components/ui/SectionHeader/SectionHeader";

export default function Brands() {
  return (
    <section className="brands">
      <div className="container brands__container">
        <div className="brands__ouija">
          <Board />
          <Logos />
          <Planchette />
          <Vignette />
          <OverlayFadeUp opacity="0.5" />
        </div>
        <div className="content brands__content">
          <SectionHeader
            subtitle="Roll over and click to reveal tales from beyond the veil."
            title="Client Archive"
            variant="dark"
          />
        </div>
      </div>
      <Separator />
    </section>
  );
}
