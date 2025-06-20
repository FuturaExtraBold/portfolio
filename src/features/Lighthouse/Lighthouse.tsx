import { type JSX, useRef } from "react";
import { Background, Container, Content, Section } from "layout";
import { AnimatedText, Separator, Vignette } from "ui";
import PixiApp from "experiences/Lighthouse/PixiApp";
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
          <span className="heading--2 lighthouse__title">
            <AnimatedText text="The Pursuit of Perfection" />
          </span>
          <span className="body text-light lighthouse__description">
            <AnimatedText
              text="Like any great illusion, the magic lies in precision. Every element
            is fine-tuned for performance, accessibility, and visual poise. The
            result? Lighthouse scores that dazzle, without smoke or mirrors."
              simple
            />
          </span>
        </Content>
        <div className="overlay lighthouse__overlay"></div>
      </Container>
      <Separator />
    </Section>
  );
}
