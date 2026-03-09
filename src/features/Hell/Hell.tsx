import { type JSX } from "react";
import { Background, Container, Content, Section } from "layout";
import { OverlayFade, SectionHeader, Separator } from "ui/index";
import { useViewport } from "providers/AppProvider";
import PixiApp from "experiences/Hell/PixiApp";
import { PixiErrorBoundary } from "experiences/PixiErrorBoundary";
import { useContainerRef } from "hooks/useContainerRef";
import "./styles.scss";

export default function Hell(): JSX.Element {
  const [parentRef, setParentRef, hasParent] = useContainerRef();
  const { breakpoints, windowSize } = useViewport();

  return (
    <Section className="hell">
      <Container className="hell__container" ref={setParentRef}>
        <Background className="hell__background">
          {hasParent && (
            <PixiErrorBoundary>
              <PixiApp parentRef={parentRef as any} />
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
