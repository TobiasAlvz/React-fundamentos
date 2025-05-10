import Card from "./components/card";
import image1 from "./assets/ba9464145eba8762f6286a3c8387c951.jpg";
import image2 from "./assets/esb-poster.jpg";
import image3 from "./assets/rotj-poster.jpg";
import Button from "./components/Button";

function App() {
  return (
    <>
    <Button text="AAAAAAAAAAAAAAAAAAAAAAAAAAAA"/>
      <h1>Exercicio 2</h1>
      <Card title="aaaaaaaaaaaaaaaaaaaaaaa" poster={image1} />
      <Card title="bbbbbbbbbbbbbbbbbbbbbbb" poster={image2} />
      <Card title="ccccccccccccccccc" poster={image3} />
      <Button text="Comprar Agora"/>
    </>
  );
}

export default App;
