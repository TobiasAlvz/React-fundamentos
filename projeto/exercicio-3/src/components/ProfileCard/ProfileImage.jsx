import styles from "./ProfileCard.module.css";

export default function ProfileImage({ src, alt }) {
  return <img className={styles.profileImage} src={src} alt={alt} />;
}
