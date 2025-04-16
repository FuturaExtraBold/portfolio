import { Background, Container, Content, Section } from "layout";
import { OverlayFade, Separator, Wallpaper } from "ui";
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
          <span className="body text-accent cta__description">
            This is the call to action section. A title, description, and an
            email me button should be here. Open to design suggestions.
          </span>
        </Content>
      </Container>
      <Separator />
    </Section>
  );
}
