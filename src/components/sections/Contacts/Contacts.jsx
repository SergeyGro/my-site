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
      <div className="contact-links">
        <a
          href="https://github.com/SergeyGro"
          target="_blank"
          className="contact-link"
        >
          <FaGithub /> GitHub
        </a>
        <a href="https://t.me/Crassys" target="_blank" className="contact-link">
          <FaTelegramPlane /> Telegram
        </a>
        <a href="mailto:sirgroshev@yandex.ru" className="contact-link">
          <FaEnvelope /> sirgroshev@yandex.ru
        </a>
      </div>
      {/* Форму обратной связи добавлю позже */}
    </section>
  );
}
