import { useTheme } from "../../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} className={styles.themeBtn}>
      <span className={theme === "light" ? styles.light : styles.dark}></span>
      <FaSun color={theme === "light" ? "#fbac13" : "#0e1116"} />
      <FaMoon color={theme === "dark" ? "#bdd0e4" : "#0e1116"} />
    </button>
  );
}
