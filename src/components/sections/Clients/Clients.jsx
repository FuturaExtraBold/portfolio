import { Background, Container, Content, Section } from "components/layout";
import { Board, ClientQuilt, Planchette } from "./components";
import { OverlayFade, SectionHeader, Separator, Vignette } from "components/ui";
import "./styles.scss";

export default function Clients() {
  return (
    <Section className="clients">
      <Container className="clients__container">
        <Background>
          <div className="clients__ouija">
            <Board />
            <ClientQuilt />
            <Planchette />
            <Vignette />
            <OverlayFade opacity="0.5" />
          </div>
        </Background>
        <Content className="clients__content">
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
