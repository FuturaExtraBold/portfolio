import type { JSX } from "react";
import { useRef } from "react";
import { Background, Container, Content, Section } from "layout";
import { Separator } from "ui";
import { benzoTitle } from "experiences/Benzo/images";
import PixiApp from "experiences/Benzo/PixiApp";
import "./styles.scss";

export default function Hero(): JSX.Element {
  const parentRef = useRef<HTMLDivElement | null>(null);

  return (
    <Section className="hero">
      <Container className="hero__container" ref={parentRef as any}>
        <Background className="hero__background">
          {parentRef.current && <PixiApp parentRef={parentRef as any} />}
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
      </Container>
      <Separator />
    </Section>
  );
}
