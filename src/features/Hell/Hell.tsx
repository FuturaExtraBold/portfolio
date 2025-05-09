import { type JSX, useRef } from "react";
import { Background, Container, Content, Section } from "layout";
import { OverlayFade, SectionHeader, Separator } from "ui/index";
import { useWindowSizeWithBreakpoints } from "hooks/useWindowSizeWithBreakpoints";
import PixiApp from "experiences/Hell/PixiApp";
import "./styles.scss";

export default function Hell(): JSX.Element {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const { breakpoints } = useWindowSizeWithBreakpoints();

  return (
    <Section className="hell">
      <Container className="hell__container" ref={parentRef as any}>
        <Background className="hell__background">
          {parentRef.current && <PixiApp parentRef={parentRef as any} />}
        </Background>
        <div className="overlay hell__overlay"></div>
        <Content className="hell__content">
          <SectionHeader
            subtitle="This is the end of the page. The fire looks cool though, right?"
            title="Awww, Hell."
            useShadow
            variant="default"
          />
        </Content>
        <OverlayFade />
      </Container>
      {window.outerWidth < breakpoints.xl && <Separator />}
    </Section>
  );
}
