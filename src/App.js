import React from "react";
import "./App.scss";
import Brands from "components/Brands/Brands";
import Hero from "components/Hero/Hero";
import Separator from "components/Separator/Separator";

function App() {
  return (
    <div className="App">
      <Hero />
      <Separator />
      <Brands />
      <Separator />
    </div>
  );
}

export default App;
