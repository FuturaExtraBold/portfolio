import React from "react";
import imageBackground from "../../../assets/images/benzo/benzo_no_animation.jpg";
import "./styles.scss";

export default function BenzoNoAnimation() {
  return (
    <div className="benzo-no-animation">
      <div className="container benzo-no-animation__container">
        <img
          className="benzo-no-animation__image"
          src={imageBackground}
          alt="No Amination Benzo Background"
        />
      </div>
      <div className="layout-test-specs">
        Hero
        <br />
        1440 x 960 (3:2)
        <br />
        Animations need ideation and color correction
        <br />
        I will color the eyes to match the crystal ball, and add blinking
        <br />I want the crystal ball, the hands, and my shoulders to move
        subtly
        <br />I can do all the animations, just need confirmation
      </div>
    </div>
  );
}
