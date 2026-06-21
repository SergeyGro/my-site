import styles from "./ProjectCard.module.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard(props) {
  return (
    <article className={styles.projectCard}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <ul>
        {props.techStack.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      <div className={styles.projectCardLinks}>
        <a href={props.githubLink}>
          <FaGithub size={35} color="#0E1116" />
        </a>
        <a href={props.demoLink}>
          {props.demoLink ? (
            <FaExternalLinkAlt size={33} color="#0E1116" />
          ) : (
            ""
          )}
        </a>
      </div>
    </article>
  );
}
