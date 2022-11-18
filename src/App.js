import "./App.css";
import Javohir from "./Javohir/javohir";
import Najmiddin from "./Najmiddin/Najmiddin";
import Islom from './Islom/Islom'
import Elyor from "./Elyor/elyor";


function App() {
  return (
    <>
      <Elyor/>
      <Javohir />
      <Najmiddin />
      <Islom name='Islom' job='Developer' />

    </>
  );
}

export default App;
