import styles from "./About.module.css";
import Skills from "../Skills/Skills";

export default function About() {
  return (
    <section className={styles.aboutSection} id="about">
      <h2 className="highlightText">Обо мне</h2>
      <p>
        Меня зовут Сергей. Начал путь в IT с вёрстки, быстро перешёл к созданию
        полноценных SPA. Люблю, когда интерфейс не просто красивый, а удобный, а
        код — понятный и поддерживаемый.
      </p>
      <p>
        За 2026 год сделал четыре проекта: адаптивный лендинг, трекер задач на
        чистом JS, блог с REST API и этот сайт-визитку на React. Сейчас
        продолжаю осваивать React, чтобы строить более сложные и интерактивные
        приложения.
      </p>
      <Skills />
    </section>
  );
}
