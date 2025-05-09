import Title from "./components/Title";
import SubTitle from "./components/SubTitle";
import Status from "./components/Status";
import styles from "./App.module.css";

function sum(a, b) {
  return a + b;
}

export default function App() {
  return (
    <div className={styles.app}>
      <Title />
      <SubTitle />
      <Status />
    </div>
  );
}
