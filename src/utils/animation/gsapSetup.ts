import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
