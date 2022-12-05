import "./app.scss";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/about/Main.layout";
import Tabs from "./components/tab/Tabs";
import data1 from './components/tab/tabsType1.json'
import Title from "./components/title/Title";

function App() {
  return (
    <div className="App">
      {/* <MainLayout>
      <Tabs {...data1}/>

      </MainLayout> */}
      <Title titleUpLink={'123 123 123'}/>
    </div>
  );
}

export default App;
