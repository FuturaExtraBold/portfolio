import PixiApp from "experiences/Lighthouse/PixiApp";
import { PixiErrorBoundary } from "experiences/PixiErrorBoundary";
import { useContainerRef } from "hooks/useContainerRef";
import { Background, Container, Content, Section } from "layout";
import { memo, type JSX } from "react";
import { AnimatedText, FadeIn, Separator, Vignette } from "ui";
import "./styles.scss";

function Lighthouse(): JSX.Element {
  const [parentRef, setParentRef, hasParent] = useContainerRef();

  return (
    <Section className="lighthouse">
      <Container className="lighthouse__container" ref={setParentRef}>
        <Background className="lighthouse__background">
          {hasParent && (
            <PixiErrorBoundary>
              <PixiApp parentRef={parentRef as any} />
            </PixiErrorBoundary>
          )}
          <Vignette />
        </Background>
        <Content className="lighthouse__content">
          <span className="heading--2 lighthouse__title">
            <AnimatedText text="The Pursuit of Perfection" center />
          </span>
          <FadeIn>
            <span className="body text-light lighthouse__description">
              Like any great illusion, the magic lies in precision. Every
              element is fine-tuned for performance, accessibility, and visual
              poise. The result? Lighthouse scores that dazzle, without smoke or
              mirrors.
            </span>
          </FadeIn>
        </Content>
        <div className="overlay lighthouse__overlay"></div>
      </Container>
      <Separator />
    </Section>
  );
}

export default memo(Lighthouse);
