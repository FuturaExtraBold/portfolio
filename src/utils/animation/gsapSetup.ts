import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin";
import {
  Application,
  Assets,
  Container,
  DisplacementFilter,
  Sprite,
  Spritesheet,
  Texture,
  TilingSprite,
} from "pixi.js";

gsap.registerPlugin(PixiPlugin);
PixiPlugin.registerPIXI({
  Application,
  Assets,
  Container,
  DisplacementFilter,
  Sprite,
  Spritesheet,
  Texture,
  TilingSprite,
});

console.log("GSAP plugins:", gsap.plugins);
