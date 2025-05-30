import { type JSX } from "react";
import { Container, Content, Section } from "layout";
import "./styles.scss";

export default function Hell(): JSX.Element {
  return (
    <Section className="museum-card">
      <Container className="museum-card__container">
        <Content className="museum-card__content">
          <div className="museum-card__stain"></div>
          <div className="museum-card__top">
            <span className="museum-card__title">
              <strong>Ben Hays</strong> (b. 1981)
            </span>
            <span className="museum-card__title">
              <em>
                <strong>Benzo the Great Developer,</strong>
              </em>
              &nbsp;2025
            </span>
            <span className="museum-card__medium">React on &lt;canvas&gt;</span>
          </div>
          <div className="museum-card__bottom">
            <span className="museum-card__description">
              Made on a Mac in sunny Southern California
            </span>
            <span className="museum-card__description">
              &copy; 2025 Ben Hays. All rights reserved.
            </span>
          </div>
        </Content>
      </Container>
    </Section>
  );
}
