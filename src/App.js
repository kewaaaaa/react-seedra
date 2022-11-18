import "./App.css";
import Javohir from "./Javohir/javohir";
import Najmiddin from "./Najmiddin/Najmiddin";
import Islom from './Islom/Islom'

function App() {
  return (
    <>
      <Javohir />
      <Najmiddin />
      <Islom name='Islom' job='Developer' />
    </>
  );
}

export default App;
