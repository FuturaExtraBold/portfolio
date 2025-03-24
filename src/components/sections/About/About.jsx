import React from "react";
import Separator from "components/ui/Separator/Separator";
import Wallpaper from "components/ui/Wallpaper/Wallpaper";
import "./styles.scss";

export default function About() {
  return (
    <section className="about">
      <Wallpaper />
      <div className="overlay about__overlay" />
      <div className="about__content">
        <div className="about__image"></div>
        <div className="about__text">
          <h1 className="about__title">
            Marvel at feats of spectacular ingenuity.
          </h1>
          <div className="about__description">
            <p>
              I am a Frontend Developer with a passion for creating
              pixel-perfect and responsive web experiences. I have over 20 years
              of building websites and web applications with React, HTML, and
              CSS.
            </p>
          </div>
        </div>
      </div>
      <Separator />
    </section>
  );
}
