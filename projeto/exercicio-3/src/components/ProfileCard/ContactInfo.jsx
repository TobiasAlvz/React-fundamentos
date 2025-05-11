import styles from "./ProfileCard.module.css";

export default function ContactInfo({ phone, email }) {
  return (
    <>
      <p className={styles.phone}>{phone}</p>
      <p className={styles.email}>{email}</p>
    </>
  );
}
