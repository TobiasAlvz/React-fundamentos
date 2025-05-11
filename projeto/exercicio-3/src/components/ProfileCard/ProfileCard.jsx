import styles from "./ProfileCard.module.css";


export default function ProfileCard({
  name,
  jobTitle,
  phone,
  email,
  imageUrl,
  githubUrl,
  linkedinUrl,
  twitterUrl,
}) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <img src={imageUrl} alt={name} className={styles.profileImage} />
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.description}>{jobTitle}</p>
        <p className={styles.phone}>{phone}</p>
        <p className={styles.email}>{email}</p>

        <div className={styles.socialButtons}>
          <a
            href={githubUrl}
            className={`${styles.btn} ${styles.github}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href={linkedinUrl}
            className={`${styles.btn} ${styles.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={twitterUrl}
            className={`${styles.btn} ${styles.twitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
}
