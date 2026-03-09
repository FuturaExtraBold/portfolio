import { type JSX, useCallback, useRef, useState } from "react";
import { Background, Container, Content, Section } from "layout";
import { OverlayFade, SectionHeader, Separator } from "ui/index";
import { useViewport } from "providers/AppProvider";
import PixiApp from "experiences/Hell/PixiApp";
import "./styles.scss";

export default function Hell(): JSX.Element {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const [hasParent, setHasParent] = useState(false);
  const setParentRef = useCallback((node: HTMLDivElement | null) => {
    parentRef.current = node;
    setHasParent(!!node);
  }, []);
  const { breakpoints, windowSize } = useViewport();

  return (
    <Section className="hell">
      <Container className="hell__container" ref={setParentRef}>
        <Background className="hell__background">
          {hasParent && <PixiApp parentRef={parentRef as any} />}
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
