import { memo, type JSX } from "react";
import { Background, Container, Content, Section } from "layout";
import { Separator } from "ui";
import { useBenzoLoad } from "providers/AppProvider";
import PixiApp from "experiences/Benzo/PixiApp";
import { useContainerRef } from "hooks/useContainerRef";
import "./styles.scss";
import Progress from "./components/Progress/Progress";

function Hero(): JSX.Element {
  const [parentRef, setParentRef, hasParent] = useContainerRef();
  const { benzoLoadProgress } = useBenzoLoad();

  return (
    <Section className="hero">
      <Container className="hero__container" ref={setParentRef}>
        <Background className="hero__background">
          {hasParent && <PixiApp parentRef={parentRef as any} />}
        </Background>
        <Content className="hero__content">
          {benzoLoadProgress !== 1 && <Progress />}
        </Content>
        <div className="overlay hero__overlay"></div>
      </Container>
      <Separator />
    </Section>
  );
}

export default memo(Hero);
