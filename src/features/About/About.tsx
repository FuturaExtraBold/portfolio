import { type JSX, useEffect, useRef, useState } from "react";
import { useApp } from "providers/AppProvider";
import {
  Background,
  Container,
  Content,
  ResponsiveImage,
  Section,
} from "layout";
import { OverlayFade, Separator, Wallpaper } from "ui/index";
import { animateFloat } from "utils/animation";
import { useFluidProperty } from "hooks/useFluidProperty";
import shipImage1x from "./images/ship@1x.webp";
import shipImage2x from "./images/ship@2x.webp";
import "./styles.scss";

export default function About(): JSX.Element {
  const { appIsLoaded, assetSize, breakpoints } = useApp();
  const refShip = useRef<HTMLImageElement>(null);

  const fluidAmplitudeX = useFluidProperty({
    minWidth: breakpoints.md,
    maxWidth: breakpoints.xl,
    minValue: 5,
    maxValue: 10,
  });

  const fluidAmplitudeY = useFluidProperty({
    minWidth: breakpoints.md,
    maxWidth: breakpoints.xl,
    minValue: 20,
    maxValue: 30,
  });

  useEffect(() => {
    if (refShip.current && assetSize !== "mobile") {
      animateFloat({
        amplitudeX: fluidAmplitudeX,
        amplitudeY: fluidAmplitudeY,
        ref: refShip,
        rotationRange: 180,
        tickTime: 0.0075,
      });
    }
  }, [breakpoints, fluidAmplitudeX, fluidAmplitudeY, assetSize, refShip]);

  return (
    <Section className="about">
      <Container>
        <Background>
          <Wallpaper />
          <OverlayFade opacity={0.8} />
        </Background>
        <Content className="about__content">
          <ResponsiveImage
            alt="Ship"
            className="about__image"
            fallbackSrc={shipImage1x}
            height={544}
            hideOnMobile={true}
            lazy={false}
            ref={refShip}
            sizes="(max-width: 768px) 248px, 496px"
            srcSet={`${shipImage1x} 1x, ${shipImage2x} 2x`}
            width={496}
          />
          {appIsLoaded && (
            <div className="about__text">
              <h1 className="heading--2 about__title">
                Marvel at Feats of Spectacular Ingenuity
              </h1>
              <div className="body text-accent about__description">
                <span>
                  A seasoned practitioner of the digital arts, I’ve spent over
                  two decades conjuring responsive websites, immersive
                  interfaces, and interactive experiences that delight and
                  perform. With a sharp eye for detail and a touch of the
                  theatrical, I specialize in elegant animations, refined
                  design, and front-end sorcery powered by React, HTML, CSS, and
                  their modern kin.
                </span>
              </div>
            </div>
          )}
        </Content>
      </Container>
      <Separator />
    </Section>
  );
}
