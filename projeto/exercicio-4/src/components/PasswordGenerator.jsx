import { useState } from 'react';
import PasswordDisplay from './PasswordDisplay';
import CopyButton from './CopyButton';
import styles from './PasswordGenerator.module.css';

function gerarSenha(tamanho = 12) {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*()_-=+';
  let senha = '';
  for (let i = 0; i < tamanho; i++) {
    const index = Math.floor(Math.random() * caracteres.length);
    senha += caracteres[index];
  }
  return senha;
}

export default function PasswordGenerator() {
  const [senha, setSenha] = useState('');
  const [copiado, setCopiado] = useState(false);

  const gerar = () => {
    const nova = gerarSenha();
    setSenha(nova);
    setCopiado(false);
  };

  const copiar = () => {
    navigator.clipboard.writeText(senha);
    setCopiado(true);
  };

  return (
    <>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={gerar}>Gerar!</button>
        <CopyButton onClick={copiar} copiado={copiado} disabled={!senha} />
      </div>
      <PasswordDisplay senha={senha} />
    </>
  );
}
