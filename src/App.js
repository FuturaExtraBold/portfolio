import About from "components/sections/About/About";
import Clients from "components/sections/Clients/Clients";
import Hell from "components/sections/Hell/Hell";
import Hero from "components/sections/Hero/Hero";
import Lighthouse from "components/sections/Lighthouse/Lighthouse";
import PictureFrame from "components/ui/PictureFrame/PictureFrame";
import Resume from "components/sections/Resume/Resume";
import { useApp } from "./AppProvider";
import "./app.scss";

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
      <Hell />
    </main>
  );
}

export default App;
