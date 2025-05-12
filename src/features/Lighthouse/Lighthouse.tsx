import { type JSX, useRef } from "react";
import { Background, Container, Content, Section } from "layout";
import { Separator, Vignette } from "ui";
import PixiApp from "experiences/Lighthouse/PixiApp";
import Scores from "./components";
import "./styles.scss";

export default function Lighthouse(): JSX.Element {
  const parentRef = useRef<HTMLDivElement | null>(null);

  return (
    <Section className="lighthouse">
      <Container className="lighthouse__container" ref={parentRef as any}>
        <Background className="lighthouse__background">
          {parentRef.current && <PixiApp parentRef={parentRef as any} />}
          <Vignette />
        </Background>
        <Content className="lighthouse__content">
          <Scores />
          <span className="heading--2 lighthouse__title">
            The Pursuit of Perfection
          </span>
          <span className="body text-light lighthouse__description">
            With tools old and new — like Google Lighthouse — I build sites that
            banish lag, skip layout shifts, and make every metric shine. Speed!
            Accessibility! SEO! All dazzled into perfect 100s.
          </span>
        </Content>
        <div className="overlay lighthouse__overlay"></div>
      </Container>
      <Separator />
    </Section>
  );
}
