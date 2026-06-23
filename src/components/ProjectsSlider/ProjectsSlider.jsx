import styles from "./ProjectsSlider.module.css";
import { useState } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Simple Landing",
      description:
        "Адаптивный лендинг по макету Figma. HTML, CSS, бургер-меню.",
      techStack: ["HTML5", "CSS3", "Flexbox", "Grid"],
      githubLink: "https://github.com/SergeyGro/simple-landing",
      demoLink: "https://sergeygro.github.io/simple-landing",
    },
    {
      id: 2,
      title: "LifeOrganizer",
      description:
        "SPA на чистом JS: трекер задач и привычек, роутинг на History API, localStorage.",
      techStack: ["JavaScript", "CSS Grid", "LocalStorage", "History API"],
      githubLink: "https://github.com/SergeyGro/life-organizer",
      demoLink: "https://sergeygro.github.io/life-organizer",
    },
    {
      id: 3,
      title: "Blog App",
      description: "CRUD приложение с JSON Server, пагинация, поиск, адаптив.",
      techStack: [
        "React (в процессе)",
        "REST API",
        "JSON Server",
        "CSS Modules",
      ],
      githubLink: "https://github.com/SergeyGro/blog-app",
      demoLink: "",
    },
  ];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const currentProject = projects[currentIndex];

  return (
    <div className={styles.slider}>
      <h3>{currentProject.title}</h3>
      <p>{currentProject.description}</p>
      <ul>
        {currentProject.techStack.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      <div className={styles.projectLinks}>
        <a href={currentProject.githubLink}>
          <FaGithub size={35} color="#0E1116" />
        </a>
        <a href={currentProject.demoLink}>
          {currentProject.demoLink ? (
            <FaExternalLinkAlt size={33} color="#0E1116" />
          ) : (
            ""
          )}
        </a>
      </div>

      <button
        onClick={prevSlide}
        className={`${styles.sliderBtn} ${styles.sliderBtnLeft}`}
      >
        <HiOutlineChevronLeft size={80} />
      </button>
      <button
        onClick={nextSlide}
        className={`${styles.sliderBtn} ${styles.sliderBtnRight}`}
      >
        <HiOutlineChevronRight size={80} />
      </button>
      <div className={styles.projectsMarker}>
        {projects.map((project, index) => (
          <button
            key={index}
            id={project.id}
            className={`${styles.projectMarker} ${currentIndex + 1 === project.id ? styles.currentProjectMarker : ""}`}
            onClick={() => {
              setCurrentIndex(project.id - 1);
            }}
          ></button>
        ))}
      </div>
    </div>
  );
}
