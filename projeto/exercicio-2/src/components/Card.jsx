import styles from "./card.module.css";
import Button from "./Button";

export default function Card({title, poster}) {
  return (
    <div className={styles.container}>
      {" "}
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img
            src={poster}
            alt={title}
            className={styles.poster}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea illum
            est sequi ut, odit quasi cumque corrupti voluptatem, modi iste
            commodi velit nostrum itaque obcaecati earum dolores. Similique, a
            delectus!
          </p>
          <Button text="Comprar Agora"/>
        </div>
      </div>
    </div>
  );
}
