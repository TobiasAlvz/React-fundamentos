import styles from './CopyButton.module.css';

export default function CopyButton({ onClick, copiado, disabled }) {
  const buttonClass = copiado ? `${styles.button} ${styles.copiado}` : styles.button;

  return (
    <button
      onClick={onClick}
      className={buttonClass}
      disabled={disabled}
    >
      {copiado ? 'Copiado!' : 'Copiar'}
    </button>
  );
}
