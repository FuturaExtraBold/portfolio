import React from "react";
import Separator from "components/ui/Separator/Separator";
import Wallpaper from "components/ui/Wallpaper/Wallpaper";
import imageShip from "../../../assets/images/about/ship.png";
import "./styles.scss";

export default function About() {
  return (
    <section className="about">
      <Wallpaper />
      <div className="overlay about__overlay" />
      <div className="about__content">
        <img className="about__image" src={imageShip} alt="Ship" />
        <div className="about__text">
          <p className="heading--1 about__title">
            Marvel at feats of spectacular ingenuity.
          </p>
          <div className="about__description">
            <p>
              I am a Frontend Developer with a penchant for creating
              pixel-perfect and responsive web experiences. I have over 20 years
              of experience building websites, interactive advertising, and web
              applications. My expertise includes working with React and its
              variants, as well as HTML, CSS, and their modern frameworks.
            </p>
          </div>
        </div>
      </div>
      <Separator />
    </section>
  );
}
