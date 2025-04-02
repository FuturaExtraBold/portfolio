import React from "react";
import OverlayFadeUp from "components/ui/OverlayFadeUp/OverlayFadeUp";
import Separator from "components/ui/Separator/Separator";
import Wallpaper from "components/ui/Wallpaper/Wallpaper";
import imageShip from "../../../assets/images/about/ship.png";
import "./styles.scss";

export default function About() {
  return (
    <section className="about">
      <div className="container about__container">
        <Wallpaper />
        <OverlayFadeUp opacity={0.8} />
        <div className="content about__content">
          <img className="about__image" src={imageShip} alt="Ship" />
          <div className="about__text">
            <h1 className="heading--2 about__title">
              Marvel at feats of spectacular ingenuity.
            </h1>
            <div className="about__description">
              <p>
                I am a Frontend Developer with a penchant for creating
                pixel-perfect and responsive web experiences. I have over 20
                years of experience building websites, interactive advertising,
                and web applications. My expertise includes working with React
                and its variants, as well as HTML, CSS, and their modern
                frameworks.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Separator />
    </section>
  );
}
