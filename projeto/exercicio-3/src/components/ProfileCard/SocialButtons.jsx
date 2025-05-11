import SocialButton from "./SocialButton";
import styles from "./ProfileCard.module.css";

export default function SocialButtons({ githubUrl, linkedinUrl, twitterUrl }) {
  return (
    <div className={styles.socialButtons}>
      <SocialButton
        href={githubUrl}
        label="GitHub"
        className={`${styles.btn} ${styles.github}`}
      />
      <SocialButton
        href={linkedinUrl}
        label="LinkedIn"
        className={`${styles.btn} ${styles.linkedin}`}
      />
      <SocialButton
        href={twitterUrl}
        label="Twitter"
        className={`${styles.btn} ${styles.twitter}`}
      />
    </div>
  );
}
