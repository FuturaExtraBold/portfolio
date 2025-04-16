import type { JSX } from "react";
import { Container, Content } from "layout";
import "./styles.scss";

interface TechListingProps {
  category: string;
  hideSlash?: boolean;
  tech: string;
}

function TechListing({
  category,
  hideSlash = false,
  tech,
}: TechListingProps): JSX.Element {
  return (
    <span className="disclaimer-text disclaimer-text--small">
      {`${category}: ${tech}`}
      {!hideSlash && <span> / </span>}
    </span>
  );
}

export default function Footer(): JSX.Element {
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
              category="Production"
              tech="Adobe Creative Suite"
              hideSlash
            />
            <br />
            <TechListing category="Linting" tech="ESLint, Stylelint" />
            <TechListing category="Source Control" tech="Github" />
            <TechListing category="Testing" tech="Jest" />
            <TechListing category="Auditing" tech="Google Lighthouse" />
            <TechListing category="Hosting" tech="Github Pages" hideSlash />
          </div>
        </Content>
      </Container>
    </footer>
  );
}
