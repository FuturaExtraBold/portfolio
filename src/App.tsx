import { type JSX } from "react";
import {
  About,
  CallToAction,
  Clients,
  Footer,
  Hell,
  // Hero,
  Lighthouse,
  Resume,
  Layout,
} from "features";
// import { ClientModal, PictureFrame } from "ui/index";
import { ClientModal } from "ui/index";
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
        {/* <PictureFrame /> */}
        <Layout />
        {/* <Hero /> */}
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
