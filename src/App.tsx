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
import { ClientModal, PictureFrame, Scroller } from "ui";
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
      <footer>
        <Lazy component={MuseumCard} />
      </footer>
      <Lazy component={ClientModal} />
      {/* <Scroller /> */}
    </>
  );
}

export default App;
