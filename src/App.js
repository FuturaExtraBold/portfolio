import React from "react";
import Brands from "components/Brands/Brands";
import Hero from "components/Hero/Hero";
import Lighthouse from "components/Lighthouse/Lighthouse";
import Separator from "components/Separator/Separator";
// import Wallpaper from "components/Wallpaper/Wallpaper";

function App() {
  return (
    <div className="App">
      {/* <Wallpaper /> */}
      <Hero />
      <Separator />
      <Brands />
      <Separator />
      <Lighthouse />
      <Separator />
    </div>
  );
}

export default App;
