import styles from "./page.module.css";
import Demo from "@/components/react-three-fiber/Demo";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Demo />
      </main>
    </div>
  );
}
