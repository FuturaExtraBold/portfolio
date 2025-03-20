import React from "react";
import "./App.scss";
import Brands from "components/Brands/Brands";
import Hero from "components/Hero/Hero";
import Separator from "components/Separator/Separator";
import Wallpaper from "components/Wallpaper/Wallpaper";

function App() {
  return (
    <div className="App">
      <Wallpaper />
      <Hero />
      <Separator />
      <Brands />
      <Separator />
    </div>
  );
}

export default App;
