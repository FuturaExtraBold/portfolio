import React from "react";
import OverlayFadeUp from "components/ui/OverlayFadeUp/OverlayFadeUp";
import SectionHeader from "components/ui/SectionHeader/SectionHeader";
import Separator from "components/ui/Separator/Separator";
import Wallpaper from "components/ui/Wallpaper/Wallpaper";
import Employers from "./Employers/Employers";
import "./styles.scss";

export default function Resume() {
  return (
    <section className="resume">
      <Wallpaper />
      <OverlayFadeUp opacity={0.8} />
      <div className="content resume__content">
        <SectionHeader
          subtitle="An illustrious career has earned his fame far and wide."
          title="Work History"
        />
        <Employers />
      </div>
      <Separator />
    </section>
  );
}
