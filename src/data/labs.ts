export interface LabProject {
  id: string;
  name: string;
  description: string;
  tarotImage: string;
  tarotImage1x: string;
  protoVideo: string;
  url: string;
}

export const labProjects: LabProject[] = [
  {
    id: "project-alpha",
    name: "Lorcana 3D Viewer",
    description:
      "A card conjured into three dimensions — light bending across its surface, tilting as though guided by an unseen hand.",
    tarotImage: "/assets/images/labs/tarot/lorcana.webp",
    tarotImage1x: "/assets/images/labs/tarot/lorcana@1x.webp",
    protoVideo: "/assets/images/labs/prototypes/lorcana.mp4",
    url: "https://lorcana.benhays.dev",
  },
  {
    id: "project-beta",
    name: "Dynamic Typography",
    description:
      "Each letter senses what draws near — glyphs shifting weight as the cursor passes, like type that breathes.",
    tarotImage: "/assets/images/labs/tarot/hovertext.webp",
    tarotImage1x: "/assets/images/labs/tarot/hovertext@1x.webp",
    protoVideo: "/assets/images/labs/prototypes/hovertext.mp4",
    url: "https://hovertext.benhays.dev",
  },
  {
    id: "project-gamma",
    name: "Valorant Experience",
    description:
      "A world that stirs at every touch — micro-interactions woven into the fabric of an immersive landing rite.",
    tarotImage: "/assets/images/labs/tarot/valorant.webp",
    tarotImage1x: "/assets/images/labs/tarot/valorant@1x.webp",
    protoVideo: "/assets/images/labs/prototypes/valorant.mp4",
    url: "https://valorant.benhays.dev",
  },
  {
    id: "project-delta",
    name: "WALL•E 3D",
    description:
      "Glass that holds light like memory — a creature brought to life through custom reflective materials and an outstretched hand.",
    tarotImage: "/assets/images/labs/tarot/walle.webp",
    tarotImage1x: "/assets/images/labs/tarot/walle@1x.webp",
    protoVideo: "/assets/images/labs/prototypes/walle.mp4",
    url: "https://wall-e.benhays.dev",
  },
  {
    id: "project-epsilon",
    name: "Tag Toy",
    description:
      "Legal Grafitti — a canvas that responds to touch, where tags bloom like street art under the hand’s caress.",
    tarotImage: "/assets/images/labs/tarot/tagtoy.webp",
    tarotImage1x: "/assets/images/labs/tarot/tagtoy@1x.webp",
    protoVideo: "/assets/images/labs/prototypes/tagtoy.mp4",
    url: "https://tagtoy.benhays.dev",
  },
];
