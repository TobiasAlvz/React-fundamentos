import styles from "./ProfileCard.module.css";

export default function SocialButton({ href, label }) {
  return (
    <a
      href={href}
      className={styles.SocialButton}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  );
}
