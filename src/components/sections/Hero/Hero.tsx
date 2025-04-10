import type { JSX } from "react";
import { useRef } from "react";
import { Application, extend } from "@pixi/react";
import {
  Background,
  Container as BenzoContainer,
  Content,
  Section,
} from "components/layout";
import { Container, Sprite } from "pixi.js";
import { BenzoProvider } from "./Benzo/BenzoProvider";
import { Separator } from "../../ui";
import "./styles.scss";
import { benzoTitle } from "../../sections/Hero/Benzo/images";

extend({
  Container,
  Sprite,
});

export default function Hero(): JSX.Element {
  const parentRef = useRef<HTMLDivElement | null>(null);

  return (
    <Section className="hero">
      <BenzoContainer className="hero__container" ref={parentRef}>
        <Background className="hero__background">
          {parentRef.current && (
            <Application
              antialias={true}
              autoDensity={true}
              background="#000000"
              backgroundAlpha={0}
              resizeTo={parentRef.current}
              resolution={window.devicePixelRatio || 1}
            >
              <BenzoProvider parentRef={parentRef} />
            </Application>
          )}
        </Background>
        <Content className="hero__content">
          <img
            src={benzoTitle}
            alt="Benzo"
            width="754"
            style={{
              display: "none",
            }}
          />
        </Content>
        <div className="overlay hero__overlay"></div>
      </BenzoContainer>
      <Separator />
    </Section>
  );
}
