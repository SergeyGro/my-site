import styles from "./Contacts.module.css";
import { FaGithub, FaTelegramPlane, FaEnvelope } from "react-icons/fa";

export default function Contacts() {
  return (
    <section className="contacts">
      <h2>Связаться со мной</h2>
      <p>
        Если хочешь предложить работу, обсудить проект или просто поболтать —
        пиши!
      </p>
      <div className={styles.contactLinks}>
        <a href="https://github.com/SergeyGro" target="_blank">
          <FaGithub size={40} color="#333" />
        </a>
        <a href="https://t.me/Crassys" target="_blank">
          <FaTelegramPlane size={40} color="#0088cc" />
        </a>
        <a href="mailto:sirgroshev@yandex.ru">
          <FaEnvelope size={40} color="var(--text-page)" />
        </a>
      </div>
      {/* Форму обратной связи добавлю позже */}
    </section>
  );
}
