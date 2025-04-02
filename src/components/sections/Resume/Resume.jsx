import React from "react";
import { Background, Container, Content, Section } from "components/layout";
import {
  OverlayFade,
  SectionHeader,
  Separator,
  Wallpaper,
} from "components/ui";
import Employers from "./Employers/Employers";
import "./styles.scss";

export default function Resume() {
  return (
    <Section className="resume">
      <Container>
        <Background>
          <Wallpaper />
          <OverlayFade opacity={0.8} />
        </Background>
        <Content>
          <SectionHeader
            subtitle="An illustrious career has earned his fame far and wide."
            title="Work History"
          />
          <Employers />
        </Content>
      </Container>
      <Separator />
    </Section>
  );
}
