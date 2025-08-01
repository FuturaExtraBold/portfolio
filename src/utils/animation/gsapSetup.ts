import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PixiPlugin } from "gsap/PixiPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import {
  Application,
  Assets,
  Container,
  DisplacementFilter,
  Sprite,
  TilingSprite,
} from "pixi.js";

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("beforeunload", () => {
  window.scrollTo(0, 0);
});

gsap.registerPlugin(PixiPlugin);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

ScrollTrigger.config({
  autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
  ignoreMobileResize: true,
});

// Refresh ScrollTrigger on resize after a delay
let resizeTimer: NodeJS.Timeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    ScrollTrigger.refresh();
  }, 250);
});

PixiPlugin.registerPIXI({
  Application,
  Assets,
  Container,
  DisplacementFilter,
  Sprite,
  TilingSprite,
});

console.log("GSAP plugins:", gsap.plugins);
