import styles from "./Skills.module.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";

export default function Skills() {
  const skills = {
    base: ["HTML5", "CSS3", "JavaScript (ES6+)", "Git & GitHub", "Figma"],
    tools: ["React (изучаю)", "REST API", "JSON Server", "CSS Modules"],
    methodology: ["БЭМ", "Адаптивная вёрстка", "Семантическая вёрстка"],
  };
  return (
    <section className={styles.skills}>
      <h2>Навыки</h2>
      <div className={styles.skillsList}>
        <div className={styles.skillsCategory}>
          <h3>Базовые</h3>
          <ul>
            {skills.base.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className={styles.skillsCategory}>
          <h3>Библиотеки / Инструменты</h3>
          <ul>
            {skills.tools.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className={styles.skillsCategory}>
          <h3>Методологии</h3>
          <ul>
            {skills.methodology.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.techIcons}>
        <div>
          <FaHtml5 color="#E34F26" size={40} />
          <p>HTML5</p>
        </div>
        <div>
          <FaCss3Alt color="#1572B6" size={40} />
          <p>CSS3</p>
        </div>
        <div>
          <FaJs color="#F7DF1E" size={40} />
          <p>JavaScript</p>
        </div>
        <div>
          <FaReact color="#61DAFB" size={40} />
          <p>React</p>
        </div>
        <div>
          <FaGitAlt color="#F05032" size={40} />
          <p>Git</p>
        </div>
        <div>
          <FaFigma color="#F24E1E" size={40} />
          <p>Figma</p>
        </div>
      </div>
    </section>
  );
}
