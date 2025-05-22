import { type JSX, useEffect, useRef } from "react";
import { useApp } from "providers/AppProvider";
import { Background, Container, Content, Section } from "layout";
import { OverlayFade, Separator, Wallpaper } from "ui/index";
import { animateFloat } from "utils/animation";
import { fluidProperty } from "utils/layout";
import "./styles.scss";

export default function About(): JSX.Element {
  const { breakpoints, assetSize } = useApp();
  const refShip = useRef<HTMLImageElement | null>(null);

  const fluidAmplitudeX = fluidProperty({
    minWidth: breakpoints.md,
    maxWidth: breakpoints.xl,
    minValue: 5,
    maxValue: 10,
  });

  const fluidAmplitudeY = fluidProperty({
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
          <img
            alt="Ship"
            className="about__image"
            ref={refShip}
            src="/assets/images/ui/ship@2x.webp"
            width={496}
            height={544}
            // srcSet="/assets/images/ui/transparent_pixel.webp 1535w, /assets/images/ui/ship@2x.webp 1536w"
          />
          <div className="about__text">
            <h1 className="heading--2 about__title">
              Marvel at Feats of Spectacular Ingenuity
            </h1>
            <div className="body text-accent about__description">
              <span>
                A seasoned practitioner of the digital arts, I’ve spent over two
                decades conjuring responsive websites, immersive interfaces, and
                interactive experiences that delight and perform. With a sharp
                eye for detail and a touch of the theatrical, I specialize in
                elegant animations, refined design, and front-end sorcery
                powered by React, HTML, CSS, and their modern kin.
              </span>
            </div>
          </div>
        </Content>
      </Container>
      <Separator />
    </Section>
  );
}
