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
import { ClientModal, PictureFrame } from "components/ui";
import { useApp } from "AppProvider";
import "./app.scss";

function App() {
  const { currentSection, mediaClass } = useApp();

  return (
    <>
      <main
        className={`media--${mediaClass}`}
        data-current-section={currentSection}
        id="benzo-app"
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
      <ClientModal />
    </>
  );
}

export default App;
