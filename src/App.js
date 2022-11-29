import "./app.scss";
import Navbar from "./component/navbar/navbar";
import Footer from "./component/footer/footer";
import Page1 from "./pages/page1/page1";
import Page2 from "./pages/page2/page2";
import Page3 from "./pages/page3/page3";
import Blog from "./pages/blog/blog";
import Faqs from "./pages/faq/Faqs";
import Price from "./pages/price/price";
import { Routes, Route , Link} from "react-router-dom";

// import Change from './pages/change/change'

function App() {
  return (
    <div className="container">
      <Navbar />

      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/buy" element={<Page2 />} />
        <Route path="/discount" element={<Page3 />} />
        <Route path="/price" element={<Price />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faqs" element={<Faqs />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
