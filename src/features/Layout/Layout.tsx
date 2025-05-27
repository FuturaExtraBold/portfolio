import { type JSX, useRef } from "react";
import { Container, Content, Section } from "layout";
import { Separator } from "ui";
import "./styles.scss";
import imageDesktop from "./images/hero_layout_desktop.webp";
import imageTablet from "./images/hero_layout_tablet.webp";
import imageMobile from "./images/hero_layout_mobile.webp";

export default function Layout(): JSX.Element {
  const parentRef = useRef<HTMLDivElement | null>(null);

  return (
    <Section className="layout">
      <Container className="layout__container" ref={parentRef as any}>
        <Content className="layout__content">
          <picture>
            <source
              srcSet={imageDesktop}
              media="(min-width: 769px)"
              width="2400"
              height="1600"
            />
            <source
              srcSet={imageTablet}
              media="(min-width: 431px)"
              width="1536"
              height="1024"
            />
            <img
              src={imageMobile}
              alt="Layout example"
              width="430"
              height="1024"
              className="layout__image"
            />
          </picture>
        </Content>
      </Container>
      <Separator />
    </Section>
  );
}
