import React from "react";
import { Background, Container, Content, Section } from "components/layout";
import { Board, Logos, Planchette } from "./components";
import { OverlayFade, SectionHeader, Separator, Vignette } from "components/ui";
import "./styles.scss";

export default function Brands() {
  return (
    <Section className="brands">
      <Container>
        <Background>
          <div className="brands__ouija">
            <Board />
            <Logos />
            <Planchette />
            <Vignette />
            <OverlayFade opacity="0.5" />
          </div>
        </Background>
        <Content>
          <SectionHeader
            subtitle="Roll over and click to reveal tales from beyond the veil."
            title="Client Archive"
            variant="dark"
          />
        </Content>
      </Container>
      <Separator />
    </Section>
  );
}
