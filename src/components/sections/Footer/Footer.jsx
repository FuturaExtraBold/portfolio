import { Background, Container, Content } from "components/layout";
import { OverlayFade, Wallpaper } from "components/ui";
import "./styles.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Background>
          <Wallpaper />
          <OverlayFade opacity={0.8} />
        </Background>
        <Content className="footer__content">
          <h1>Footer</h1>
        </Content>
      </Container>
    </footer>
  );
}
