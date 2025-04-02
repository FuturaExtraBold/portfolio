import React from "react";
import { Background, Container, Content, Section } from "components/layout";
import { OverlayFade, SectionHeader } from "components/ui";
import { imageHell } from "assets/images";
import "./styles.scss";

export default function Hell() {
  return (
    <Section className="hell">
      <Container className="hell__container">
        <Background>
          <img className="hell__image" src={imageHell} alt="Hell" />
          <OverlayFade />
        </Background>
        <Content>
          <SectionHeader
            subtitle="This is the end of the page. The fire looks cool though, right?"
            title="Awww, Hell."
          />
        </Content>
      </Container>
    </Section>
  );
}
