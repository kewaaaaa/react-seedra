import "./app.scss";
import React from "react";
import Navbar from "./layouts/navbar/Navbar";
import Footer from "./layouts/footer/Footer";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AllProds from "./pages/allProds/AllProds";
import AboutPage from "./pages/about/AboutPage";
import Func from "./pages/singlePage/SinglePage";
import { ThemeProvider } from "./providers/ThemeProvider";
import Layout from "./layouts/LAyout/Lauout";
// import Register from "./pages/register/Register";


function App() {
  return (
    <div className="">
      <ThemeProvider>
        <Layout>
          <header>
            <Navbar />
          </header>
          <main>
            <Routes>
              {/* <Route path="/reg" element={<Register />} /> */}
              <Route path="/" element={<HomePage />} />
              <Route path="/all_prods" element={<AllProds />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/posts/:id" element={<Func />} />
            </Routes>
            <Footer />
          </main>
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
