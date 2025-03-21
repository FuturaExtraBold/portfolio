import React from "react";
import imageBackground from "../../assets/images/lighthouse/background.jpg";
import "./styles.scss";
import Vignette from "components/Vignette/Vignette";

export default function Lighthouse() {
  return (
    <div className="lighthouse">
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
      </div>
    </div>
  );
}
