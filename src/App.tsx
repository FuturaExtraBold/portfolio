import { type JSX } from "react";
import {
  About,
  CallToAction,
  Clients,
  Footer,
  Hell,
  Hero,
  Lighthouse,
  MuseumCard,
  Resume,
} from "features";
import { ClientModal, PictureFrame } from "ui/index";
import { useApp } from "providers/AppProvider";
import "./app.scss";

function App(): JSX.Element {
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
      <MuseumCard />
      {/* <Footer /> */}
      <ClientModal />
    </>
  );
}

export default App;
