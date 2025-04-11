import { Background, Container, Content, Section } from "components/layout";
import { SectionHeader, Separator, Vignette } from "components/ui";
import Scores from "./components";
import { imageLighthouse } from "assets/images";
import "./styles.scss";

export default function Lighthouse() {
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
          />
        </Content>
      </Container>
      <Separator />
    </Section>
  );
}
