import styles from "./Footer.module.css";
import { FaGithub, FaTelegramPlane, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <p className={styles.copyright}>© 2026 Sergey Groshev</p>
    </footer>
  );
}
