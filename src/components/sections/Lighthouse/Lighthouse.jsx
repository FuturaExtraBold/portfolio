import React from "react";
import Separator from "components/ui/Separator/Separator";
import Vignette from "components/ui/Vignette/Vignette";
import imageBackground from "../../../assets/images/lighthouse/background.jpg";
import "./styles.scss";

export default function Lighthouse() {
  return (
    <section className="lighthouse">
      <div className="content lighthouse__content">
        <Vignette />
        <img
          className="lighthouse__background"
          src={imageBackground}
          alt="Background"
        />
      </div>
      <Separator />
    </section>
  );
}
