import { useState } from "react";
import PasswordDisplay from "./PasswordDisplay";
import CopyButton from "./CopyButton";
import styles from "./PasswordGenerator.module.css";

export default function PasswordGenerator() {
  const [senha, setSenha] = useState("");
  const [copiado, setCopiado] = useState(false);
  const [customizada, setCustomizada] = useState(true); 
  const [passwordSize, setPasswordSize] = useState(12);
  function gerarSenha(tamanho) {
    const caracteres =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*()_-=+";
    let senha = "";
    for (let i = 0; i < tamanho; i++) {
      const index = Math.floor(Math.random() * caracteres.length);
      senha += caracteres[index];
    }
    return senha;
  }

  const gerar = () => {
    const tamanho = customizada ? passwordSize : 8; 
    const nova = gerarSenha(Number(tamanho));
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
        <label>
          <input
            type="checkbox"
            checked={customizada}
            onChange={() => setCustomizada((prev) => !prev)}
          />
          Usar senha customizada
        </label>

        {customizada && (
          <input
            type="number"
            id="passwordSize"
            min={1}
            value={passwordSize}
            onChange={(ev) => setPasswordSize(Number(ev.target.value))}
          />
        )}

        <button className={styles.button} onClick={gerar}>
          Gerar!
        </button>
        <CopyButton onClick={copiar} copiado={copiado} disabled={!senha} />
      </div>
      <PasswordDisplay senha={senha} />
    </>
  );
}
