import styles from "./ProfileCard.module.css";
export default function ProfileImage({ src, alt, className }) {
  return <img src={src} alt={alt} className={className} />;
}
