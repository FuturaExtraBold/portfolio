import { type JSX, useRef } from "react";
import { Background, Container, Content, Section } from "layout";
import { Separator } from "ui";
import { useApp } from "providers/AppProvider";
import PixiApp from "experiences/Benzo/PixiApp";
import "./styles.scss";
import Progress from "./components/Progress/Progress";

export default function Hero(): JSX.Element {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const { benzoLoadProgress } = useApp();

  return (
    <Section className="hero">
      <Container className="hero__container" ref={parentRef as any}>
        <Background className="hero__background">
          {parentRef.current && <PixiApp parentRef={parentRef as any} />}
        </Background>
        <Content className="hero__content">
          {benzoLoadProgress !== 1 && <Progress />}
        </Content>
        <div className="overlay hero__overlay"></div>
      </Container>
      <Separator />
    </Section>
  );
}
