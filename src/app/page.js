import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.highlightsContainer}>
      <img src={"/With triangularframe.jpg"} alt="Profile" className={styles.imageStyle} />
      </div>
    </main>
  );
}
