import styles from "./App.module.css";
import PasswordGenerator from "./components/PasswordGenerator";

function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Gerador de senhas</h1>
      <PasswordGenerator />
    </div>
  );
}

export default App;
