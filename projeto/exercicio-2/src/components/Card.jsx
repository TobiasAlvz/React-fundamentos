import styles from "./card.module.css";
import Button from "./Button";

export default function Card() {
  return (
    <div className={styles.container}>
      {" "}
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img
            src="/ba9464145eba8762f6286a3c8387c951.jpg"
            alt="Pôster de Star Wars"
            className={styles.poster}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>Pôster: Star Wars (1977)</h2>
          <p className={styles.description}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea illum
            est sequi ut, odit quasi cumque corrupti voluptatem, modi iste
            commodi velit nostrum itaque obcaecati earum dolores. Similique, a
            delectus!
          </p>
          <Button />
        </div>
      </div>
    </div>
  );
}
