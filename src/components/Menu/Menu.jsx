import styles from "./Menu.module.css";
import { SlMenu, SlUser, SlBookOpen, SlEnvolope } from "react-icons/sl";
import { useState } from "react";
// import Button from "../Button/Button";

export default function Menu() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={styles.menuSection}>
      <p
        className={[styles.menuIcon, isActive && styles.iconIsActive]
          .filter(Boolean)
          .join(" ")}
        onMouseEnter={() => {
          setIsActive(true);
        }}
        onMouseLeave={() => {
          setIsActive(false);
        }}
      >
        <SlMenu />
      </p>
      <nav
        className={[styles.headerNav, !isActive && styles.navInActive]
          .filter(Boolean)
          .join(" ")}
        onMouseEnter={() => {
          setIsActive(true);
        }}
        onMouseLeave={() => {
          setIsActive(false);
        }}
      >
        <a href="#">
          <i>
            <SlUser />
          </i>
          Обо мне
        </a>
        <a href="#">
          <i>
            <SlBookOpen />
          </i>
          Проекты
        </a>
        <a href="#">
          <i>
            <SlEnvolope />
          </i>
          Контакты
        </a>
      </nav>
    </div>
  );
}
