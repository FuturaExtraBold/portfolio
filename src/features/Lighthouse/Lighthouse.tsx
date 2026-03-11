import "./styles.scss";

import { PixiErrorBoundary } from "experiences/PixiErrorBoundary";
import { useContainerRef } from "hooks/useContainerRef";
import { Background, Container, Content, Section } from "layout";
import { type JSX, lazy, memo, RefObject, Suspense } from "react";

const PixiApp = lazy(() => import("experiences/Lighthouse/PixiApp"));
import { AnimatedText, FadeIn, Separator, Vignette } from "ui";

function Lighthouse(): JSX.Element {
  const [parentRef, setParentRef, hasParent] = useContainerRef();

  return (
    <Section className="lighthouse">
      <Container className="lighthouse__container" ref={setParentRef}>
        <Background className="lighthouse__background">
          {hasParent && (
            <PixiErrorBoundary>
              <Suspense fallback={null}>
                <PixiApp parentRef={parentRef as RefObject<HTMLDivElement>} />
              </Suspense>
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
