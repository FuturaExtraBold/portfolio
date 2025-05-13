import { type JSX, useRef } from "react";
import { Background, Container, Content, Section } from "layout";
import { Separator } from "ui";
import { useApp } from "providers/AppProvider";
import PixiApp from "experiences/Benzo/PixiApp";
import "./styles.scss";

export default function Hero(): JSX.Element {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const { benzoLoadProgress, userDevice } = useApp();

  return (
    <Section className="hero">
      <Container className="hero__container" ref={parentRef as any}>
        <Background className="hero__background">
          {parentRef.current && <PixiApp parentRef={parentRef as any} />}
        </Background>
        <Content className="hero__content">
          {benzoLoadProgress !== 1 ? (
            <div className="progress-bar">
              <span className="progress-bar__title">Loading</span>
              <div className="progress-bar__container">
                <div
                  className="progress-bar__guts"
                  style={{
                    left: `${benzoLoadProgress * 100 - 100}%`,
                  }}
                ></div>
              </div>
            </div>
          ) : (
            <span className="device-info text-light">
              Device: {JSON.stringify(userDevice)}
            </span>
          )}
        </Content>
        <div className="overlay hero__overlay"></div>
      </Container>
      <Separator />
    </Section>
  );
}
