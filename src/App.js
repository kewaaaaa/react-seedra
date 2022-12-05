import "./app.scss";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/about/Main.layout";
import Tabs from "./components/tab/Tabs";
import data2 from './components/tab/tabsType2.json'
import data1 from './components/tab/tabsType1.json'

function App() {
  return (
    <div className="App">
      <MainLayout>
      <Tabs {...data2}/>

      </MainLayout>
    </div>
  );
}

export default App;
