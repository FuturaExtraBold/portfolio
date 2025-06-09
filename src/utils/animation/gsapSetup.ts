import { gsap } from "gsap";
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

PixiPlugin.registerPIXI({
  Application,
  Assets,
  Container,
  DisplacementFilter,
  Sprite,
  TilingSprite,
});

console.log("GSAP plugins:", gsap.plugins);
