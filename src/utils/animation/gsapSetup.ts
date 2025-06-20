import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PixiPlugin } from "gsap/PixiPlugin";

import {
  Application,
  Assets,
  Container,
  DisplacementFilter,
  Sprite,
  TilingSprite,
} from "pixi.js";

gsap.registerPlugin(PixiPlugin);
gsap.registerPlugin(ScrollTrigger);

PixiPlugin.registerPIXI({
  Application,
  Assets,
  Container,
  DisplacementFilter,
  Sprite,
  TilingSprite,
});

console.log("GSAP plugins:", gsap.plugins);
