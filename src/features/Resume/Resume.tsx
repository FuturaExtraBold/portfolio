import { type JSX } from "react";
import { Background, Container, Content, Section } from "layout";
import { OverlayFade, SectionHeader, Separator, Wallpaper } from "ui";
import Employers from "./components/Employers/Employers";
import "./styles.scss";

export default function Resume(): JSX.Element {
  return (
    <Section className="resume">
      <Container>
        <Background>
          <Wallpaper />
          <OverlayFade opacity={0.8} />
        </Background>
        <Content className="resume__content">
          <SectionHeader
            subtitle="Apprentice turned master — now accepting encore opportunities."
            title="Work History"
            variant="default"
          />
          <Employers />
        </Content>
      </Container>
      <Separator />
    </Section>
  );
}
