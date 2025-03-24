import React from "react";
import Separator from "components/ui/Separator/Separator";
import Wallpaper from "components/ui/Wallpaper/Wallpaper";
import "./styles.scss";

export default function About() {
  return (
    <section className="about">
      <div className="container about__container">
        <Wallpaper />
      </div>
      <div className="layout-test-specs">
        About?
        <br />
        1440 x 480 (3:1 or Arbitrary)
        <br />
        Marvel at feats of CSS Strength and React wizardry
        <br />
        Cool typography, 1920's movie poster style
      </div>
      <Separator />
    </section>
  );
}
