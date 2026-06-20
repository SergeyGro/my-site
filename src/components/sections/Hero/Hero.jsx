import styles from "./Hero.module.css";
import Button from "../../Button/Button";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1>Привет, я Сергей</h1>
      <div className={styles.heroInfoBlock}>
        <p className="hero-subtitle">Начинающий фронтенд-разработчик</p>
        <p className="hero-description">
          Создаю современные веб-интерфейсы. Мой код - не просто вёрстка, а
          работающие SPA с роутингом, API и адаптивом.
        </p>
      </div>
      <div className={styles.heroButtons}>
        <Button>Смотреть проекты</Button>
        <Button>Связаться</Button>
      </div>
    </section>
  );
}
