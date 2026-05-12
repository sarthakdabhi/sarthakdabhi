export type Project = {
  name: string;
  description: string;
  url: string;
  liveUrl?: string;
  language: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    name: "angular-essentials",
    description:
      "A ready‑to‑go Angular application scaffold. Modules and architecture to bootstrap any project, small or large.",
    url: "https://github.com/sarthakdabhi/angular-essentials",
    language: "JavaScript",
    tags: ["Angular", "Architecture", "Starter"],
  },
  {
    name: "infopopup",
    description:
      "A drop‑in JavaScript plugin — an open alternative to Google Maps' InfoWindow.",
    url: "https://github.com/sarthakdabhi/infopopup",
    language: "HTML",
    tags: ["JavaScript", "Plugin", "UI"],
  },
  {
    name: "ng-laravel",
    description:
      "AngularJS app integrated with the Laravel PHP framework — a full‑stack reference.",
    url: "https://github.com/sarthakdabhi/ng-laravel",
    language: "PHP",
    tags: ["Angular", "Laravel", "Full‑stack"],
  },
  {
    name: "balloons-popper",
    description:
      "An educational game for children that teaches numbers through play. TypeScript + Canvas.",
    url: "https://github.com/sarthakdabhi/balloons-popper",
    language: "TypeScript",
    tags: ["Game", "Canvas", "EdTech"],
  },
  {
    name: "drawingboard",
    description:
      "An open drawing board for everyone — shapes, text, memes. Live demo included.",
    url: "https://github.com/sarthakdabhi/drawingboard",
    liveUrl: "https://sarthakdabhi.github.io/drawingboard/",
    language: "HTML",
    tags: ["Canvas", "Tool", "Open Source"],
  },
  {
    name: "addition-1",
    description:
      "A learn‑through‑play game teaching kids how to add single‑digit numbers.",
    url: "https://github.com/sarthakdabhi/addition-1",
    language: "JavaScript",
    tags: ["Game", "EdTech", "HTML5"],
  },
];
