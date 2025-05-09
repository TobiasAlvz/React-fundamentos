import Title from "./components/Title";
import SubTitle from "./components/SubTitle";
import Status from "./components/Status";

function sum(a, b) {
  return a + b;
}

export default function App() {
  return (
    <div>
      <Title />
      <SubTitle />
      <Status />
    </div>
  );
}
