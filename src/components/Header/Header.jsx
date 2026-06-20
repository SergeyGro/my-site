import styles from "./Header.module.css";
import Menu from "../Menu/Menu";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

export default function Header() {
  return (
    <header>
      <Menu />
      <a href="#" className={styles.heroNameLink}>
        <h1>Sergey Groshev</h1>
      </a>
      <ThemeToggle />
    </header>
  );
}
