import React from "react";
import SectionHeader from "components/ui/SectionHeader/SectionHeader";
import Separator from "components/ui/Separator/Separator";
import Wallpaper from "components/ui/Wallpaper/Wallpaper";
import Employers from "./Employers/Employers";
import "./styles.scss";

export default function Resume() {
  return (
    <section className="resume">
      <Wallpaper />
      <div className="overlay resume__overlay" />
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
