import React from "react";
import { Background, Container, Content, Section } from "components/layout";
import { OverlayFade, Separator, Wallpaper } from "components/ui";
import { imageShip } from "assets/images";
import "./styles.scss";

export default function About() {
  return (
    <Section className="about">
      <Container>
        <Background>
          <Wallpaper />
          <OverlayFade opacity={0.8} />
        </Background>
        <Content>
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
        </Content>
      </Container>
      <Separator />
    </Section>
  );
}
