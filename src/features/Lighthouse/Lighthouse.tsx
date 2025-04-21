import { type JSX } from "react";
import { Background, Container, Content, Section } from "layout";
import { SectionHeader, Separator, Vignette } from "ui";
import Scores from "./components";
import imageLighthouse from "./lighthouse.jpg";
import "./styles.scss";

export default function Lighthouse(): JSX.Element {
  return (
    <Section className="lighthouse">
      <Container className="lighthouse__container">
        <Background>
          <img
            className="lighthouse__image"
            src={imageLighthouse}
            alt="Background"
          />
          <Vignette />
        </Background>
        <Content className="content lighthouse__content">
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
