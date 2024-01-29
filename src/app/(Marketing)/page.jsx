import Content from "./Content";
import styles from "../../assets/styles/menber.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.headding}>header</div>
        <div className={styles.content}>
          <Content />
        </div>
        <div>footer</div>
      </div>
    </main>
  );
}
