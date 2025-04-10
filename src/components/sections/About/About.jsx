import React, { useEffect, useRef } from "react";
import { useApp } from "AppProvider";
import { Background, Container, Content, Section } from "components/layout";
import { OverlayFade, Separator, Wallpaper } from "components/ui";
import { imageShip } from "assets/images";
import { animateFloat } from "assets/javascripts/utils";
import { fluidProperty } from "assets/javascripts/layout";
import "./styles.scss";

export default function About() {
  const { breakpoints } = useApp();
  const refShip = useRef(null);

  const fluidAmplitudeX = fluidProperty({
    minWidth: breakpoints.md,
    maxWidth: breakpoints.xl,
    minValue: 5,
    maxValue: 10,
  });

  const fluidAmplitudeY = fluidProperty({
    minWidth: breakpoints.md,
    maxWidth: breakpoints.xl,
    minValue: 10,
    maxValue: 20,
  });

  console.log(
    "fluidAmplitudeX",
    fluidAmplitudeX,
    "fluidAmplitudeY",
    fluidAmplitudeY
  );

  useEffect(() => {
    if (refShip.current) {
      animateFloat({
        amplitudeX: fluidAmplitudeX,
        amplitudeY: fluidAmplitudeY,
        ref: refShip,
        rotationRange: 180,
        tickTime: 0.0075,
      });
    }
  }, [breakpoints, fluidAmplitudeX, fluidAmplitudeY]);

  return (
    <Section className="about">
      <Container>
        <Background>
          <Wallpaper />
          <OverlayFade opacity={0.8} />
        </Background>
        <Content className="about__content">
          <img
            alt="Ship"
            className="about__image"
            ref={refShip}
            src={imageShip}
          />
          <div className="about__text">
            <h1 className="heading--2 about__title">
              Marvel at feats of spectacular ingenuity.
            </h1>
            <div className="body text-accent about__description">
              <span>
                I am a Frontend Developer with a penchant for creating
                pixel-perfect and responsive web experiences. I have over 20
                years of experience building websites, interactive advertising,
                and web applications. My expertise includes working with React
                and its variants, as well as HTML, CSS, and their modern
                frameworks.
              </span>
            </div>
          </div>
        </Content>
      </Container>
      <Separator />
    </Section>
  );
}
