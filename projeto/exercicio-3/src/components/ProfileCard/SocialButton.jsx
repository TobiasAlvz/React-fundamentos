import styles from "./ProfileCard.module.css";

export default function SocialButton({ href, label, className, onClick }) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
    >
      {label}
    </a>
  );
}
