import "./app.scss";

import { Hero, Labs } from "features";
import { Lazy } from "layout";
import { useSection, useViewport } from "providers/AppProvider";
import { type JSX, lazy } from "react";
import { PictureFrame } from "ui";

const Clients = lazy(() => import("features/Clients/Clients"));
const Resume = lazy(() => import("features/Resume/Resume"));
const Lighthouse = lazy(() => import("features/Lighthouse/Lighthouse"));
const CallToAction = lazy(() => import("features/CallToAction/CallToAction"));
const Hell = lazy(() => import("features/Hell/Hell"));
const MuseumCard = lazy(() => import("features/MuseumCard/MuseumCard"));
const ClientModal = lazy(() => import("ui/ClientModal/ClientModal"));

function App(): JSX.Element {
  const { currentSection } = useSection();
  const { mediaClass } = useViewport();

  return (
    <>
      <main
        className={`media--${mediaClass}`}
        data-current-section={currentSection}
        id="benzo-app"
      >
        <PictureFrame />
        <Hero />
        {/* <About /> */}
        <Labs />
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
