import "./app.scss";
import Navbar from "./component/navbar/navbar";
import Footer from "./component/footer/footer";
import Bonuses from './pages/bonuses/Bonuses'
import Faq from './pages/faq/Faq'
import Home from './pages/home/Home'
import HowToBuy from './pages/How to buy/How-to-buy'
import Price from './pages/price/Price'
import Sales from './pages/sales/Sales'
import Blog from './pages/blog/Blog'
import Cards from "./component/cards/Cards";

import { Routes, Route } from "react-router-dom";


// import Change from './pages/change/change'

function App() {
  return (
    <div className="">
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-to-buy" element={<HowToBuy />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/price" element={<Price />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/bonuses" element={<Bonuses />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      

      <Footer /> */}

      <Cards BigTitle={"Научим покупать вВеликобритании!"} text="и экономить до 70%"/>
    </div>
  );
}

export default App;
