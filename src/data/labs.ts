export interface LabProject {
  id: string;
  name: string;
  description: string;
  tarotImage: string;
  protoGif: string;
}

export const labProjects: LabProject[] = [
  {
    id: "project-alpha",
    name: "Project Alpha",
    description: "A short description of what was built and why.",
    tarotImage: "/assets/images/labs/tarot/tarot-01.webp",
    protoGif: "/assets/images/labs/prototypes/proto-01.gif",
  },
  {
    id: "project-beta",
    name: "Project Beta",
    description: "Another experiment born from curiosity and late-night sessions.",
    tarotImage: "/assets/images/labs/tarot/tarot-02.webp",
    protoGif: "/assets/images/labs/prototypes/proto-02.gif",
  },
  {
    id: "project-gamma",
    name: "Project Gamma",
    description: "Built purely for the love of building — no specification required.",
    tarotImage: "/assets/images/labs/tarot/tarot-03.webp",
    protoGif: "/assets/images/labs/prototypes/proto-03.gif",
  },
];
