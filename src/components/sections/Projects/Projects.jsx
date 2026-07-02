import styles from "./Projects.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Navigation, Pagination, Autoplay } from "swiper/modules";
import ProjectCard from "../../ProjectCard/ProjectCard";
import landingImgMac from "../../../assets/landing-mac.png";
import lifeOrganizerImgMac from "../../../assets/life-organizer-mac.png";
import blogAppImgMac from "../../../assets/blog-app-mac.png";
import landingImgMob from "../../../assets/landing-mob.png";
import lifeOrganizerImgMob from "../../../assets/life-organizer-mob.png";
import blogAppImgMob from "../../../assets/blog-app-mob.png";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Simple Landing",
      description:
        "Адаптивный лендинг по макету Figma. HTML, CSS, бургер-меню.",
      techStack: ["HTML5", "CSS3", "Flexbox", "Grid"],
      githubLink: "https://github.com/SergeyGro/simple-landing",
      demoLink: "https://sergeygro.github.io/simple-landing",
      img: [landingImgMac, landingImgMob],
    },
    {
      id: 2,
      title: "LifeOrganizer",
      description:
        "SPA на чистом JS: трекер задач и привычек, роутинг на History API, localStorage.",
      techStack: ["JavaScript", "CSS Grid", "LocalStorage", "History API"],
      githubLink: "https://github.com/SergeyGro/life-organizer",
      demoLink: "https://sergeygro.github.io/life-organizer",
      img: [lifeOrganizerImgMac, lifeOrganizerImgMob],
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
      img: [blogAppImgMac, blogAppImgMob],
    },
  ];
  return (
    <section className={styles.projects} id="projects">
      <h2 className="highlightText">Проекты</h2>
      <Swiper
        modules={[EffectCube, Navigation, Pagination, Autoplay]}
        effect="cube"
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        speed={1100}
        loop={true}
        className={styles.mySwiper}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectCard {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
