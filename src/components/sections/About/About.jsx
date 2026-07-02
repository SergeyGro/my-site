import styles from "./About.module.css";
import Skills from "../Skills/Skills";

export default function About() {
  return (
    <section className={styles.aboutSection} id="about">
      <h2 className="highlightText">Обо мне</h2>
      <p>
        Меня зовут Сергей. Начал свой путь в IT с чистой вёрстки, затем перешёл
        к созданию полноценных SPA. Люблю, когда интерфейс не только красивый,
        но и удобный, и написан на понятном коде.
      </p>
      <p>
        В 2026 году сделал три проекта: адаптивный лендинг, трекер задач на
        чистом JS и блог с CRUD и REST API. Сейчас активно изучаю React, чтобы
        создавать ещё более сложные приложения.
      </p>
      <Skills />
    </section>
  );
}
