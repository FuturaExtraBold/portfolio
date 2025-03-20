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
    </div>
  );
}
