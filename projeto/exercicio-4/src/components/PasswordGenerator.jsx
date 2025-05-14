import { useState } from "react";
import PasswordDisplay from "./PasswordDisplay";
import CopyButton from "./CopyButton";
import styles from "./PasswordGenerator.module.css";

export default function PasswordGenerator() {
  const [senha, setSenha] = useState("");
  const [copiado, setCopiado] = useState(false);
  const [passwordSize, setPasswordSize] = useState(12);
  function gerarSenha() {
    const caracteres =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*()_-=+";
    let senha = "";
    for (let i = 0; i < passwordSize; i++) {
      const index = Math.floor(Math.random() * caracteres.length);
      senha += caracteres[index];
    }
    return senha;
  }

  const gerar = () => {
    const nova = gerarSenha(Number(passwordSize));
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
        <input
          type="number"
          id="passwordSize"
          min={1}
          value={passwordSize}
          onChange={(ev) => setPasswordSize(ev.target.value)}
        />
        <button className={styles.button} onClick={gerar}>
          Gerar!
        </button>
        <CopyButton onClick={copiar} copiado={copiado} disabled={!senha} />
      </div>
      <PasswordDisplay senha={senha} />
    </>
  );
}
