import styles from './PasswordDisplay.module.css';

export default function PasswordDisplay({ senha }) {
  
  if (!senha) return null;
  return <p className={styles.senha}>{senha}</p>;
}
