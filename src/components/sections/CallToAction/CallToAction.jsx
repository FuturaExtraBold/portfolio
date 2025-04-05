import { Background, Container, Content, Section } from "components/layout";
import { OverlayFade, Separator, Wallpaper } from "components/ui";
import "./styles.scss";

export default function CallToAction() {
  return (
    <Section className="cta">
      <Container>
        <Background>
          <Wallpaper />
          <OverlayFade opacity={0.8} />
        </Background>
        <Content className="cta__content">
          <h1>Call to Action</h1>
          <p>
            This is the call to action section. A title, description, and an
            email me button should be here. Open to design suggestions.
          </p>
        </Content>
      </Container>
      <Separator />
    </Section>
  );
}
