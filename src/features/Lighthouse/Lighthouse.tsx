import { type JSX, useRef } from "react";
import { Background, Container, Content, Section } from "layout";
import { SectionHeader, Separator, Vignette } from "ui";
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
          <SectionHeader
            title="Google Lighthouse"
            subtitle="Lighthouse audits performance, accessibility, and more."
            useHairline={false}
            useShadow={true}
            variant="default"
          />
        </Content>
      </Container>
      <Separator />
    </Section>
  );
}
