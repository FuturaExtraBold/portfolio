import React, { useEffect, useRef } from "react";
import { Application, Sprite } from "pixi.js";

export default function BenzoNew() {
  const pixiContainerRef = useRef(null);

  useEffect(() => {
    // Create the application
    (async () => {
      const app = new Application();

      app.init({ width: 800, height: 600 });

      console.log("boom:", app);

      // // Add the view to the DOM
      document.body.appendChild(app.canvas);

      // // ex, add display objects
      app.stage.addChild(Sprite.from("something.png"));
    })();
  }, []);

  return <div ref={pixiContainerRef}></div>;
}
