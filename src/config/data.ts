export const EXPERIENCE = "1.5 Years";

export const SKILLS = {
  frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Astro",
    "TailwindCSS",
  ],
  backend: [
    "Python",
    "Java",
    "Spring Boot",
    "FastAPI",
    "REST API Development",
    "MQTT",
    "PostgreSQL",
    "MongoDB",
    "ROS2",
  ],
  gameDev: ["Unity", "C#"],
  devOps: ["Docker", "Git", "GitHub Actions", "CI/CD", "Google Cloud"],
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
      description:
        "A seesaw simulation game built with pure HTML, CSS, and JavaScript.",
      link: "https://conquistadorcan.github.io/SeesawSimulation/",
    },
    {
      title: "Personal Website",
      description: "My personal website built with Astro.",
      link: "#",
    },
  ],
  intermediate: [
    {
      title: "JAT — Job Application Tracker",
      description:
        "A job application tracker built with vanilla HTML, JavaScript, and Tailwind CSS. Features include real-time search, status filtering, table sorting, localStorage persistence, and a settings page.",
      link: "https://github.com/ConquistadorCan/job-tracker",
    },
    {
      title: "Cargo Management API",
      description: "A cargo management API built with Spring Boot.",
      link: "https://github.com/ConquistadorCan/cargo-management-api",
    },
    {
      title: "Obstacle Avoidance Algorithms Project",
      description:
        "Developed an obstacle avoidance algorithms project with ROS2 and gazebo.",
      link: "https://github.com/ConquistadorCan/Obstacle-Avoidance",
    },
    {
      title: "Data Replication Experiment With MongoDB",
      description: "Developed a data replication experiment with MongoDB.",
      link: "https://github.com/ConquistadorCan/DataReplicationExperiments",
    },
  ],
  professional: [
    {
      title: "Drone Automation Web App",
      description:
        "Developed a backend system for drone automation and web control at my previous company, using Python, Docker, and cloud deployment.",
      link: "#",
    },
  ],
};
