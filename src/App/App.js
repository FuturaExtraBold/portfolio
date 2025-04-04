import {
  About,
  CallToAction,
  Clients,
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
  );
}

export default App;
