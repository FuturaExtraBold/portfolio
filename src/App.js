import React from "react";
import Brands from "components/sections/Brands/Brands";
import Hero from "components/sections/Hero/Hero";
import Lighthouse from "components/sections/Lighthouse/Lighthouse";
// import Separator from "components/sections/Separator/Separator";
// import BenzoNoAnimation from "components/sections/Benzo/BenzoNoAnimation/BenzoNoAnimation";
import About from "components/sections/About/About";
import Resume from "components/sections/Resume/Resume";
import Hell from "components/sections/Hell/Hell";
import Wallpaper from "components/ui/Wallpaper/Wallpaper";

function App() {
  return (
    <div className="App">
      <Wallpaper />
      {/* <BenzoNoAnimation /> */}
      <Hero />
      <About />
      <Brands />
      <Resume />
      <Lighthouse />
      <Hell />
    </div>
  );
}

export default App;
