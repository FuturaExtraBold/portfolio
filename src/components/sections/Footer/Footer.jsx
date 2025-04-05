import React from "react";
import { Container, Content } from "components/layout";
import "./styles.scss";

function TechListing({ category, hideSlash, tech }) {
  return (
    <span className="disclaimer-text disclaimer-text--small">
      {`${category}: ${tech}`}
      {!hideSlash && <span> / </span>}
    </span>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Content className="footer__content">
          <div className="disclaimer-text">
            <span>® {currentYear} Benzo the Great. All rights reserved.</span>
            <br />
            <span>Made on a Mac in sunny Southern California</span>
            <br />
            <TechListing category="Code" tech="TypeScript, React, Sass" />
            <TechListing category="Animations" tech="PixiJS, GSAP" />
            <TechListing
              category="Linting"
              tech="ESLint, Stylelint"
              hideSlash
            />
            <br />
            <TechListing category="Testing" tech="Jest" />
            <TechListing category="Auditing" tech="Google Lighthouse" />
            <TechListing category="Hosting" tech="Github Pages" hideSlash />
          </div>
        </Content>
      </Container>
    </footer>
  );
}
