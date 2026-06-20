import styles from "./Footer.module.css";
import { FaGithub, FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className={styles.linksBlock}>
        <a href="https://github.com/SergeyGro" target="_blank">
          <FaGithub size={24} color="#333" />
        </a>
        <a href="https://t.me/Crassys" target="_blank">
          <FaTelegramPlane size={24} color="#0088cc" />
        </a>
      </div>
      <p className={styles.copyright}>© 2026 Sergey Groshev</p>
    </footer>
  );
}
