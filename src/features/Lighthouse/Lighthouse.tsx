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
            Through tools arcane and modern — like Google Lighthouse — I conjure
            sites that vanish lag, dodge layout shifts, and charm every metric
            into perfection. Performance, accessibility, SEO, and best
            practices? All brought to heel with a flourish. Witness the rare and
            wondrous: a full suite of glowing 100s.
          </span>
        </Content>
        <div className="overlay lighthouse__overlay"></div>
      </Container>
      <Separator />
    </Section>
  );
}
