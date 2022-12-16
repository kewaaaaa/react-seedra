import "./app.scss";
import React from "react";
import Navbar from "./layouts/navbar/Navbar";
import Footer from "./layouts/footer/Footer";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AllProds from "./pages/allProds/AllProds";
import AboutPage from "./pages/about/AboutPage";
import Func from "./pages/singlePage/SinglePage";


function App() {
  return (
    <div className="">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
           <Route path="/" element={<HomePage />} />
          <Route path="/all_prods" element={<AllProds />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/posts/:id" element={<Func />} />
        </Routes>
      <Footer />
      </main>
    </div>
  );
}

export default App;
