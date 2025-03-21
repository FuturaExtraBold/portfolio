import React from "react";
import Brands from "components/Brands/Brands";
// import Hero from "components/Hero/Hero";
import Lighthouse from "components/Lighthouse/Lighthouse";
import Separator from "components/Separator/Separator";
import BenzoNoAnimation from "components/Benzo/BenzoNoAnimation/BenzoNoAnimation";
import About from "components/About/About";
import Resume from "components/Resume/Resume";
// import Wallpaper from "components/Wallpaper/Wallpaper";

function App() {
  return (
    <div className="App">
      {/* <Wallpaper /> */}
      <BenzoNoAnimation />
      {/* <Hero /> */}
      <Separator />
      <About />
      <Separator />
      <Brands />
      <Separator />
      <Resume />
      <Separator />
      <Lighthouse />
      <Separator />
    </div>
  );
}

export default App;
