import styles from "./ProjectCard.module.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard(props) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectCardContent}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <ul>
          {props.techStack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <div className={styles.projectCardLinks}>
          <a href={props.githubLink}>
            <FaGithub size={45} color="#0E1116" />
          </a>
          <a href={props.demoLink}>
            {props.demoLink ? (
              <FaExternalLinkAlt size={43} color="#0E1116" />
            ) : (
              ""
            )}
          </a>
        </div>
      </div>
      <div className={styles.projectCardImgBlock}>
        <img
          src={props.img[0]}
          alt="imgMac"
          className={styles.projectCardImgMac}
        />
        <img
          src={props.img[1]}
          alt="imgMob"
          className={styles.projectCardImgMob}
        />
      </div>
    </div>
  );
}

// <div className={styles.projectCard}>
//       <div className={styles.sliderContent}>
//         <div className={styles.sliderContentText}>
//           <h3>{props.title}</h3>
//           <p>{props.description}</p>
//         </div>

//         <ul>
//           {props.techStack.map((tech, index) => (
//             <li key={index}>{tech}</li>
//           ))}
//         </ul>
//         <div className={styles.projectLinks}>
//           <a href={props.githubLink}>
//             <FaGithub size={45} color="#0E1116" />
//           </a>
//           <a href={props.demoLink}>
//             {props.demoLink ? (
//               <FaExternalLinkAlt size={43} color="#0E1116" />
//             ) : (
//               ""
//             )}
//           </a>
//         </div>
//       </div>
//       <div className={styles.sliderImgBlock}>
//         <img
//           src={props.img[0]}
//           alt="imgMac"
//           className={styles.sliderImgMac}
//         />
//         <img
//           src={props.img[1]}
//           alt="imgMob"
//           className={styles.sliderImgMob}
//         />
//       </div>
//       <button
//         onClick={prevSlide}
//         className={`${styles.sliderBtn} ${styles.sliderBtnLeft}`}
//       >
//         <HiOutlineChevronLeft size={80} />
//       </button>
//       <button
//         onClick={nextSlide}
//         className={`${styles.sliderBtn} ${styles.sliderBtnRight}`}
//       >
//         <HiOutlineChevronRight size={80} />
//       </button>
//       <div className={styles.projectsMarker}>
//         {projects.map((project, index) => (
//           <button
//             key={index}
//             id={project.id}
//             className={`${styles.projectMarker} ${currentIndex + 1 === project.id ? styles.currentProjectMarker : ""}`}
//             onClick={() => {
//               setCurrentIndex(project.id - 1);
//             }}
//           ></button>
//         ))}
//       </div>
//     </div>
