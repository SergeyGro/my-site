import styles from "./Projects.module.css";
import ProjectCard from "../../ProjectCard/ProjectCard";

export default function Projects() {
  return (
    <section className={styles.projects}>
      <h2>Проекты</h2>
      <div className="projects-grid">
        <ProjectCard
          title="Simple Landing"
          description="Адаптивный лендинг по макету Figma. HTML, CSS, бургер-меню."
          techStack={["HTML5", "CSS3", "Flexbox", "Grid"]}
          githubLink="https://github.com/SergeyGro/simple-landing"
          demoLink="https://sergeygro.github.io/simple-landing"
        />
        <ProjectCard
          title="LifeOrganizer"
          description="SPA на чистом JS: трекер задач и привычек, роутинг на History API, localStorage."
          techStack={["JavaScript", "CSS Grid", "LocalStorage", "History API"]}
          githubLink="https://github.com/SergeyGro/life-organizer"
          demoLink="https://sergeygro.github.io/life-organizer"
        />
        <ProjectCard
          title="Blog App"
          description="CRUD приложение с JSON Server, пагинация, поиск, адаптив."
          techStack={[
            "React (в процессе)",
            "REST API",
            "JSON Server",
            "CSS Modules",
          ]}
          githubLink="https://github.com/SergeyGro/blog-app"
          demoLink="https://sergeygro.github.io/blog-app"
        />
      </div>
    </section>
  );
}
