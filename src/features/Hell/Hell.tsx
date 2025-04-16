import type { JSX } from "react";
import { useRef } from "react";
import { Application, extend } from "@pixi/react";
import {
  Background,
  Container as HellContainer,
  Content,
  Section,
} from "components/layout";
import { OverlayFade, SectionHeader } from "components/ui";
import { Container, DisplacementFilter, Sprite, TilingSprite } from "pixi.js";
import { HellProvider } from "./HellApp/HellProvider";
import "./styles.scss";

extend({
  Container,
  DisplacementFilter,
  Sprite,
  TilingSprite,
});

export default function Hell(): JSX.Element {
  const parentRef = useRef<HTMLDivElement | null>(null);

  return (
    <Section className="hell">
      <HellContainer className="hell__container" ref={parentRef}>
        <Background className="hell__background">
          {parentRef.current && (
            <Application
              antialias={true}
              autoDensity={true}
              background="#000000"
              backgroundAlpha={0}
              resizeTo={parentRef.current}
              resolution={window.devicePixelRatio || 1}
            >
              <HellProvider parentRef={parentRef} />
            </Application>
          )}
        </Background>
        <Content className="hell__content">
          <SectionHeader
            subtitle="This is the end of the page. The fire looks cool though, right?"
            title="Awww, Hell."
            useShadow
            variant="default"
          />
        </Content>
        <OverlayFade />
      </HellContainer>
    </Section>
  );
}
