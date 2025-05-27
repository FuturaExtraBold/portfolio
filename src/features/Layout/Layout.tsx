import { type JSX, useRef } from "react";
import { Background, Container, Content, Section } from "layout";
import { Separator } from "ui";
import "./styles.scss";

export default function Layout(): JSX.Element {
  const parentRef = useRef<HTMLDivElement | null>(null);

  return (
    <Section className="layout">
      <Container className="layout__container" ref={parentRef as any}>
        <Background className="layout__background">
          <h1>Hello</h1>
        </Background>
        <Content className="layout__content">
          <h1>World!</h1>
        </Content>
      </Container>
      <Separator />
    </Section>
  );
}
