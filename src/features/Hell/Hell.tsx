import "./styles.scss";

import { PixiErrorBoundary } from "experiences/PixiErrorBoundary";
import { useContainerRef } from "hooks/useContainerRef";
import { Background, Container, Content, Section } from "layout";
import { useViewport } from "providers/AppProvider";
import { type JSX, lazy, RefObject, Suspense } from "react";

const PixiApp = lazy(() => import("experiences/Hell/PixiApp"));
import { OverlayFade, SectionHeader, Separator } from "ui/index";

export default function Hell(): JSX.Element {
  const [parentRef, setParentRef, hasParent] = useContainerRef();
  const { breakpoints, windowSize } = useViewport();

  return (
    <Section className="hell">
      <Container className="hell__container" ref={setParentRef}>
        <Background className="hell__background">
          {hasParent && (
            <PixiErrorBoundary>
              <Suspense fallback={null}>
                <PixiApp parentRef={parentRef as RefObject<HTMLDivElement>} />
              </Suspense>
            </PixiErrorBoundary>
          )}
        </Background>
        <div className="overlay hell__overlay"></div>
        <Content className="hell__content">
          <SectionHeader
            subtitle="This is the end of the page. The fire looks cool though, right?"
            title="Awww, Hell."
            useShadow
            variant="default"
            useHairline={false}
          />
        </Content>
        <OverlayFade />
      </Container>
      {windowSize.width < breakpoints.xl && <Separator />}
    </Section>
  );
}
