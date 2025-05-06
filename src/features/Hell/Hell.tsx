import { type JSX, useRef } from "react";
import { Background, Container, Content, Section } from "layout";
import { OverlayFade, SectionHeader } from "ui/index";
import PixiApp from "experiences/Hell/PixiApp";
import "./styles.scss";

export default function Hell(): JSX.Element {
  const parentRef = useRef<HTMLDivElement | null>(null);

  return (
    <Section className="hell">
      <Container className="hell__container" ref={parentRef as any}>
        <Background className="hell__background">
          {parentRef.current && <PixiApp parentRef={parentRef as any} />}
        </Background>
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
    </Section>
  );
}
