import React from "react";
import Separator from "components/ui/Separator/Separator";
import Wallpaper from "components/ui/Wallpaper/Wallpaper";
import "./styles.scss";

export default function Resume() {
  return (
    <section className="resume">
      <Wallpaper />
      <div className="overlay resume__overlay" />
      <div className="about__content">
        <p className="heading--1">Work History</p>
      </div>
      <Separator />
    </section>
  );
}
