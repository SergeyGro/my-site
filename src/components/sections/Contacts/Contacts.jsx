import styles from "./Contacts.module.css";
import { FaGithub, FaTelegramPlane, FaEnvelope } from "react-icons/fa";

export default function Contacts() {
  return (
    <section className={styles.contacts} id="contacts">
      <div className={styles.contactsInfo}>
        <h2 className="highlightText">Связаться со мной</h2>
        <p>
          Если хочешь предложить работу, обсудить проект или просто поболтать{" "}
          <span>— пиши!</span>
        </p>
      </div>
      <div className={styles.contactLinks}>
        <a href="https://github.com/SergeyGro" target="_blank">
          <FaGithub size={60} color="#333" />
        </a>
        <a href="https://t.me/Crassys" target="_blank">
          <FaTelegramPlane size={60} color="#0088cc" />
        </a>
        <a href="mailto:sirgroshev@yandex.ru">
          <FaEnvelope size={60} color="var(--text-page)" />
        </a>
      </div>
      {/* Форму обратной связи добавлю позже */}
    </section>
  );
}
