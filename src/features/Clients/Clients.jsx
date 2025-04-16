import React from "react";
import { useApp } from "providers/AppProvider";
import { Background, Container, Content, Section } from "layout";
import { Board, ClientQuilt, Planchette } from "./components";
import { OverlayFade, SectionHeader, Separator, Vignette } from "ui";
import "./styles.scss";

export default function Clients() {
  const { userDevice } = useApp();
  const { isMobile } = userDevice;

  return (
    <Section className="clients">
      <Container className="clients__container">
        <Background>
          <div className="clients__ouija">
            <Board />
            <ClientQuilt />
            {!isMobile && <Planchette />}
            <Vignette />
            <OverlayFade opacity="0.5" />
          </div>
        </Background>
        <Content className="clients__content">
          <SectionHeader
            subtitle="Choose a client to reveal tales from beyond the veil."
            title="Client Archive"
            variant="dark"
          />
        </Content>
      </Container>
      <Separator />
    </Section>
  );
}
