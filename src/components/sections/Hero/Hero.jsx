import styles from "./Hero.module.css";
import Button from "../../Button/Button";
import avatar from "../../../assets/ava.png";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInfoBlock}>
        <h1 className="highlightText">Привет, я Сергей</h1>
        <p className="hero-subtitle">Начинающий фронтенд-разработчик</p>
        <p className="hero-description">
          Создаю современные веб-интерфейсы. Мой код - не просто вёрстка, а
          работающие SPA с роутингом, API и адаптивом.
        </p>
        <div className={styles.heroButtons}>
          <Button>Смотреть проекты</Button>
          <Button>Связаться</Button>
        </div>
      </div>
      <img src={avatar} alt="bob" className={styles.avatarImg} />
    </section>
  );
}
