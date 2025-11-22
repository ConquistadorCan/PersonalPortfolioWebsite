export const EXPERIENCE = "1.5 Years";

export const SKILLS = {
  frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Astro",
    "TailwindCSS"
  ],
  backend: [
    "Python",
    "Java",
    "FastAPI",
    "REST API Development",
    "MQTT",
    "PostgreSQL",
    "MongoDB"
  ],
  gameDev: ["Unity", "C#"],
  devOps: [
    "Docker",
    "Git",
    "GitHub Actions",
    "CI/CD",
    "Google Cloud"
  ]
};

export interface Project {
  title: string;
  description: string;
  link: string;
}

export const PROJECTS: {
  beginning: Project[];
  intermediate: Project[];
  professional: Project[];
} = {
  beginning: [
    {
      title: "Seesaw Simulation",
      description: "A seesaw simulation game built with pure HTML, CSS, and JavaScript.",
      link: "https://conquistadorcan.github.io/SeesawSimulation/",
    },
    {
      title: "Personal Website",
      description: "My personal website built with Astro.",
      link: "#",
    },
  ],
  intermediate: [],
  professional: [
    {
      title: "Drone Automation Web App",
      description: "Developed a backend system for drone automation and web control at my previous company, using Python, Docker, and cloud deployment.",
      link: "#",
    },
  ],
};

