import "./app.scss";
import Navbar from './layouts/navbar/Navbar'
import Footer from "./layouts/footer/Footer";

import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="">
      <header className="container">
        <Navbar />
      </header>

      <main></main>
      <Footer />
    </div>
  );
}

export default App;
