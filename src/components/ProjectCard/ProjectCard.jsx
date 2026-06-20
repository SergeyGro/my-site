import styles from "./ProjectCard.module.css";

export default function ProjectCard(props) {
  return (
    <article>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <ul>
        {props.techStack.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      <a href={props.githubLink}>Git</a>
      <a href={props.demoLink}></a>
    </article>
  );
}
