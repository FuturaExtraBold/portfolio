import "./styles.scss";

import { labProjects } from "data/labs";
import { Background, Container, Content, Section } from "layout";
import { useAppLoad } from "providers/AppProvider";
import { type JSX,memo } from "react";
import {
  AnimatedText,
  FadeIn,
  OverlayFade,
  Separator,
  Wallpaper,
} from "ui/index";

import CardDeck from "./components/CardDeck/CardDeck";

function Labs(): JSX.Element {
  const { appIsLoaded } = useAppLoad();

  return (
    <Section className="labs">
      <Container className="labs__container">
        <Background>
          <Wallpaper />
          <OverlayFade opacity={0.8} />
        </Background>
        <Content className="labs__content">
          {appIsLoaded && (
            <>
              <div className="labs__text">
                <h1 className="heading--2 labs__title">
                  <AnimatedText
                    text="Ventures from the Digital Atelier"
                    center
                  />
                </h1>
                <div className="body text-accent labs__description">
                  <FadeIn>
                    <span>
                      Side experiments, rapid prototypes, and things built
                      purely for the love of building. Each card reveals
                      something conjured in the margins — drawn from curiosity,
                      not specification.
                    </span>
                  </FadeIn>
                </div>
              </div>
              <CardDeck projects={labProjects} />
            </>
          )}
        </Content>
      </Container>
      <Separator />
    </Section>
  );
}

export default memo(Labs);
