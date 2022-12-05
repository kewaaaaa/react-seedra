import "./app.scss";
import { Routes, Route } from "react-router-dom";
import CareerTable from "./components/Career/CareerTable";
import CurrentPage from "./components/CurrentPage/CurrentPage";

function App() {
  return (
    <div className="App">
      <CareerTable />
    </div>
  );
}

export default App;
