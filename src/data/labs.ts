export interface LabProject {
  id: string;
  name: string;
  description: string;
  tarotImage: string;
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
    protoVideo: "/assets/images/labs/prototypes/lorcana.mp4",
    url: "https://lorcana.benhays.dev",
  },
  {
    id: "project-beta",
    name: "Dynamic Typography",
    description:
      "Each letter senses what draws near — glyphs shifting weight as the cursor passes, like type that breathes.",
    tarotImage: "/assets/images/labs/tarot/hovertext.webp",
    protoVideo: "/assets/images/labs/prototypes/hovertext.mp4",
    url: "https://hovertext.benhays.dev",
  },
  {
    id: "project-gamma",
    name: "Valorant Experience",
    description:
      "A world that stirs at every touch — micro-interactions woven into the fabric of an immersive landing rite.",
    tarotImage: "/assets/images/labs/tarot/valorant.webp",
    protoVideo: "/assets/images/labs/prototypes/valorant.mp4",
    url: "https://valorant.benhays.dev",
  },
  {
    id: "project-delta",
    name: "WALL•E 3D",
    description:
      "Glass that holds light like memory — a creature brought to life through custom reflective materials and an outstretched hand.",
    tarotImage: "/assets/images/labs/tarot/walle.webp",
    protoVideo: "/assets/images/labs/prototypes/walle.mp4",
    url: "https://wall-e.benhays.dev",
  },
  {
    id: "project-epsilon",
    name: "Rivian Navbar",
    description:
      "Navigation rebuilt from the marrow — every pixel faithful to the original, summoned anew through Svelte.",
    tarotImage: "/assets/images/labs/tarot/rivian.webp",
    protoVideo: "/assets/images/labs/prototypes/rivian.mp4",
    url: "https://rivian.benhays.dev",
  },
];
