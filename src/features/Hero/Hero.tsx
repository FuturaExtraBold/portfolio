import { type JSX, useRef } from "react";
import { Background, Container, Section } from "layout";
import { Separator } from "ui";
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
        <div className="overlay hero__overlay"></div>
      </Container>
      <Separator />
    </Section>
  );
}
