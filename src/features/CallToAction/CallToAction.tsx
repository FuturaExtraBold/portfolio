import { type JSX } from "react";
import { Background, Container, Content, Section } from "layout";
import { OverlayFade, Separator, Wallpaper } from "ui";
import "./styles.scss";

export default function CallToAction(): JSX.Element {
  return (
    <Section className="cta">
      <Container>
        <Background>
          <Wallpaper />
          <OverlayFade opacity={0.8} />
        </Background>
        <Content className="cta__content">
          <span className="heading--2 cta__title">
            Beyond Illusion Lies Innovation
          </span>
          <span className="body text-accent cta__description">
            Step right up and make contact — whether you seek a conjurer of
            code, a weaver of wondrous interfaces, or simply a skilled hand to
            bring visions to life. With a résumé of marvels and a flair for the
            extraordinary, your next collaborator awaits. Reveal the artisan —
            inquire within!
          </span>
        </Content>
      </Container>
      <Separator />
    </Section>
  );
}
