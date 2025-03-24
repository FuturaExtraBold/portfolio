import React from "react";
import imageHell from "../../../assets/images/hell/hell.jpg";
import "./styles.scss";

export default function Hell() {
  return (
    <section className="hell">
      <div className="container hell__container">
        <img className="hell__image" src={imageHell} alt="Hell" />
      </div>
      <div className="layout-test-specs">
        Hell / Arbirtrary Content
        <br />
        1440 x 1440 (1:1 or Arbitrary)
        <br />
        Something cool before we descend into the depths of hell?
        <br />
        (Yes, the image needs to be fixed)
      </div>
    </section>
  );
}
