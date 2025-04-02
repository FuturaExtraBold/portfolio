import React from "react";
import { Background, Container, Content, Section } from "components/layout";
import { Board, BrandQuilt, Planchette } from "./components";
import { OverlayFade, SectionHeader, Separator, Vignette } from "components/ui";
import "./styles.scss";

export default function Brands() {
  return (
    <Section className="brands">
      <Container className="brands__container">
        <Background>
          <div className="brands__ouija">
            <Board />
            <BrandQuilt />
            <Planchette />
            <Vignette />
            <OverlayFade opacity="0.5" />
          </div>
        </Background>
        <Content className="brands__content">
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
