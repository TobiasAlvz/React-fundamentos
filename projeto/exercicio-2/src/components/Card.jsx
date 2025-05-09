import styles from "./card.module.css";

export default function Card() {
    return (
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
                  oiojijiojiojj
                </p>
                <button className={styles.buyButton}>Comprar agora</button>
            </div>
        </div>
    );
}
