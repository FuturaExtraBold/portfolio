import React from "react";
import { Container, Content } from "components/layout";
import "./styles.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Content className="footer__content">
          <div className="disclaimer-text">
            <span>® {currentYear} Benzo the Great. All rights reserved.</span>
            <span>&nbsp;</span>
            <span>Made on a Mac in sunny Southern California</span>
            <br />
            <span>Tools: TypeScript, Sass</span>
            <span> / </span>
            <span>Animations: PixiJS, GSAP</span>
            <span> / </span>
            <span>Linting: ESLint, Stylelint</span>
            <span> / </span>
            <span>Testing: Jest</span>
            <span> / </span>
            <span>Auditing: Google Lighthouse</span>
            <span> / </span>
            <span>Hosting: Github Pages</span>
          </div>
        </Content>
      </Container>
    </footer>
  );
}
