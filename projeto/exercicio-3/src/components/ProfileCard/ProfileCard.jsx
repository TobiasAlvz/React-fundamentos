import ContactInfo from "./ContactInfo";
import styles from "./ProfileCard.module.css";
import ProfileImage from "./ProfileImage";
import ProfileInfo from "./ProfileInfo";
import SocialButtons from "./SocialButtons";

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
        <ProfileImage src={imageUrl} alt={name} />
        <ProfileInfo name={name} jobTitle={jobTitle} />
        <ContactInfo phone={phone} email={email} />
        <SocialButtons
          githubUrl= {githubUrl}
          linkedinUrl={linkedinUrl}
          twitterUrl={twitterUrl}
          styles={styles}
        />
      </div>
    </div>
  );
}
