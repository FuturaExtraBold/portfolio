import React from "react";
import {
  About,
  CallToAction,
  Clients,
  Footer,
  Hell,
  Hero,
  Lighthouse,
  Resume,
} from "components/sections";
import { PictureFrame } from "components/ui";
import { useApp } from "./AppProvider";
import "./styles.scss";

function App() {
  const { currentSection, mediaClass } = useApp();

  return (
    <>
      <main
        id="benzo-app"
        className={`section--${currentSection} media--${mediaClass}`}
      >
        <PictureFrame />
        <Hero />
        <About />
        <Clients />
        <Resume />
        <Lighthouse />
        <CallToAction />
        <Hell />
      </main>
      <Footer />
    </>
  );
}

export default App;
