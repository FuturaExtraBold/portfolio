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
    name: "Project Alpha",
    description: "A short description of what was built and why.",
    tarotImage: "/assets/images/labs/tarot/lorcana.webp",
    protoVideo: "/assets/images/labs/prototypes/lorcana.mp4",
    url: "https://example.com/project-alpha",
  },
  {
    id: "project-beta",
    name: "Project Beta",
    description:
      "Another experiment born from curiosity and late-night sessions.",
    tarotImage: "/assets/images/labs/tarot/hovertext.webp",
    protoVideo: "/assets/images/labs/prototypes/hovertext.mp4",
    url: "https://example.com/project-beta",
  },
  {
    id: "project-gamma",
    name: "Project Gamma",
    description:
      "Built purely for the love of building — no specification required.",
    tarotImage: "/assets/images/labs/tarot/valorant.webp",
    protoVideo: "/assets/images/labs/prototypes/valorant.mp4",
    url: "https://example.com/project-gamma",
  },
  {
    id: "project-delta",
    name: "Project Delta",
    description:
      "A rapid prototype conjured from a single afternoon of obsession.",
    tarotImage: "/assets/images/labs/tarot/walle.webp",
    protoVideo: "/assets/images/labs/prototypes/walle.mp4",
    url: "https://example.com/project-delta",
  },
  {
    id: "project-epsilon",
    name: "Project Epsilon",
    description: "Something strange and wonderful, built in the margins.",
    tarotImage: "/assets/images/labs/tarot/rivian.webp",
    protoVideo: "/assets/images/labs/prototypes/rivian.mp4",
    url: "https://example.com/project-epsilon",
  },
];
