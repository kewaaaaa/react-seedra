import "./app.scss";
import Navbar from './layouts/navbar/Navbar'
import Footer from "./layouts/footer/Footer";
import Faq from './pages/faq/Faq'
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="">
      <header>
        <Navbar />
      </header>

      <main>
        <Routes>
          <Route path="/" />
          <Route path="/faq" element={<Faq/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
