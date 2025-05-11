import styles from "./ProfileCard.module.css";

export default function ProfileInfo({ name, jobTitle }) {
  return (
    <>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.description}>{jobTitle}</p>
    </>
  );
}
