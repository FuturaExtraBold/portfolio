import { type JSX } from "react";
import {
  About,
  CallToAction,
  Clients,
  Hell,
  Hero,
  Lighthouse,
  MuseumCard,
  Resume,
} from "features";
import { Lazy } from "layout";
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
        <Lazy component={Clients} />
        <Lazy component={Resume} />
        <Lazy component={Lighthouse} />
        <Lazy component={CallToAction} />
        <Lazy component={Hell} />
      </main>
      <Lazy component={MuseumCard} />
      <Lazy component={ClientModal} />
      {/* <Footer /> */}
    </>
  );
}

export default App;
