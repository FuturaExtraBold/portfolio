import React from "react";
import About from "components/sections/About/About";
import Brands from "components/sections/Brands/Brands";
import Hell from "components/sections/Hell/Hell";
import Hero from "components/sections/Hero/Hero";
import Lighthouse from "components/sections/Lighthouse/Lighthouse";
import PictureFrame from "components/ui/PictureFrame/PictureFrame";
import Resume from "components/sections/Resume/Resume";
import Wallpaper from "components/ui/Wallpaper/Wallpaper";
import "./benzo-app.scss";

function App() {
  return (
    <main className="benzo-app">
      <Wallpaper />
      <PictureFrame />
      <Hero />
      <About />
      <Brands />
      <Resume />
      <Lighthouse />
      <Hell />
    </main>
  );
}

export default App;
