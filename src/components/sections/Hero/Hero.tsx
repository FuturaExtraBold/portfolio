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

extend({
  Container,
  Sprite,
});

export default function Hero(): JSX.Element {
  const parentRef = useRef<HTMLDivElement | null>(null);

  return (
    <Section className="hero">
      <BenzoContainer className="hero__container" ref={parentRef}>
        <Background>
          {parentRef.current && (
            <Application background="#000000" resizeTo={parentRef.current}>
              <BenzoProvider parentRef={parentRef} />
            </Application>
          )}
        </Background>
        <Content className="hero__content" ref={parentRef}>
          <h1>Hello, world!</h1>
        </Content>
        <div className="overlay hero__overlay"></div>
      </BenzoContainer>
      <Separator />
    </Section>
  );
}
