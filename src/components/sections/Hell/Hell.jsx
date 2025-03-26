import React from "react";
import SectionHeader from "components/ui/SectionHeader/SectionHeader";
import imageHell from "../../../assets/images/hell/hell.jpg";
import "./styles.scss";

export default function Hell() {
  return (
    <section className="hell">
      <img className="hell__image" src={imageHell} alt="Hell" />
      <div className="overlay hell__overlay" />
      <SectionHeader
        subtitle="This is the end of the page. The fire looks cool though, right?"
        title="Awww, Hell."
      />
    </section>
  );
}
