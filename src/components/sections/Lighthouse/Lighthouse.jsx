import React from "react";
import { Background, Container, Content, Section } from "components/layout";
import { Separator, Vignette } from "components/ui";
import { imageLighthouse } from "assets/images";
import "./styles.scss";

export default function Lighthouse() {
  return (
    <Section className="lighthouse">
      <Container className="lighthouse__container">
        <Background className="content lighthouse__content">
          <img
            className="lighthouse__image"
            src={imageLighthouse}
            alt="Background"
          />
          <Vignette />
        </Background>
        <Content>
          <h1>Hello, nurse!</h1>
        </Content>
      </Container>
      <Separator />
    </Section>
  );
}
