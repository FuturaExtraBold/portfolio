import { type JSX, useEffect } from "react";
import { useApp } from "providers/AppProvider";
import { Background, Container, Content, Section } from "layout";
import { Board, ClientQuilt, Planchette } from "./components";
import { OverlayFade, SectionHeader, Separator, Vignette } from "ui/index";
import "./styles.scss";

export default function Clients(): JSX.Element {
  const { userDevice } = useApp();
  const { isMobile } = userDevice;

  useEffect(() => {
    if (isMobile) return;

    const section = document.querySelector(".clients");
    if (!section) return;

    const handleMouseEnter = () => {
      document.body.style.cursor = "none";
    };

    const handleMouseLeave = () => {
      document.body.style.cursor = "default";
    };

    section.addEventListener("mouseenter", handleMouseEnter);
    section.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      section.removeEventListener("mouseenter", handleMouseEnter);
      section.removeEventListener("mouseleave", handleMouseLeave);
      document.body.style.cursor = "default";
    };
  }, [isMobile]);

  return (
    <Section className="clients">
      <Container className="clients__container">
        <Background>
          <div className="clients__ouija">
            <Board />
            <ClientQuilt />
            {!isMobile && <Planchette />}
            <Vignette />
            <OverlayFade opacity={0.5} />
          </div>
        </Background>
        <Content className="clients__content">
          <SectionHeader
            subtitle="Summon projects past, conjured from beyond the veil."
            title="Client Archive"
            variant="dark"
          />
        </Content>
      </Container>
      <Separator />
    </Section>
  );
}
