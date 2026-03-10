export interface LabProject {
  id: string;
  name: string;
  description: string;
  tarotImage: string;
  protoGif: string;
  url: string;
}

export const labProjects: LabProject[] = [
  {
    id: "project-alpha",
    name: "Project Alpha",
    description: "A short description of what was built and why.",
    tarotImage: "/assets/images/labs/tarot/tarot-01.webp",
    protoGif: "/assets/images/labs/prototypes/proto-01.gif",
    url: "https://example.com/project-alpha",
  },
  {
    id: "project-beta",
    name: "Project Beta",
    description: "Another experiment born from curiosity and late-night sessions.",
    tarotImage: "/assets/images/labs/tarot/tarot-02.webp",
    protoGif: "/assets/images/labs/prototypes/proto-02.gif",
    url: "https://example.com/project-beta",
  },
  {
    id: "project-gamma",
    name: "Project Gamma",
    description: "Built purely for the love of building — no specification required.",
    tarotImage: "/assets/images/labs/tarot/tarot-03.webp",
    protoGif: "/assets/images/labs/prototypes/proto-03.gif",
    url: "https://example.com/project-gamma",
  },
  {
    id: "project-delta",
    name: "Project Delta",
    description: "A rapid prototype conjured from a single afternoon of obsession.",
    tarotImage: "/assets/images/labs/tarot/tarot-04.webp",
    protoGif: "/assets/images/labs/prototypes/proto-04.gif",
    url: "https://example.com/project-delta",
  },
  {
    id: "project-epsilon",
    name: "Project Epsilon",
    description: "Something strange and wonderful, built in the margins.",
    tarotImage: "/assets/images/labs/tarot/tarot-05.webp",
    protoGif: "/assets/images/labs/prototypes/proto-05.gif",
    url: "https://example.com/project-epsilon",
  },
  {
    id: "project-zeta",
    name: "Project Zeta",
    description: "The last experiment — for now. Drawn from curiosity, not specification.",
    tarotImage: "/assets/images/labs/tarot/tarot-06.webp",
    protoGif: "/assets/images/labs/prototypes/proto-06.gif",
    url: "https://example.com/project-zeta",
  },
];
