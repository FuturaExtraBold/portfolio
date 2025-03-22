import React from "react";
import Separator from "components/ui/Separator/Separator";
import Vignette from "components/ui/Vignette/Vignette";
import imageBackground from "../../../assets/images/lighthouse/background.jpg";
import "./styles.scss";

export default function Lighthouse() {
  return (
    <section className="lighthouse">
      <div className="container lighthouse__container">
        <Vignette />
        <img
          className="lighthouse__background"
          src={imageBackground}
          alt="Background"
        />
      </div>
      <div className="layout-test-specs">
        Lighthouse Web Test Suite
        <br />
        1440 x 640 (9:4)
        <br />
        Should have 4 animated circles that go to 100%
        <br />
        Light from Lighthouse will rotate and blind the user for a second, like
        in real life
      </div>
      <Separator />
    </section>
  );
}
