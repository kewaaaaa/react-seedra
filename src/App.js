import "./app.scss";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/about/Main.layout";
import Tabs from "./components/tab/Tabs";
import data2 from './components/tab/tabsType2.json'
import data1 from './components/tab/tabsType1.json'
import Carousel, { CarouselItem } from "./components/CoruselPartner/Corusel";

function App() {
  return (
    <div className="App">
      {/* <MainLayout>
      <Tabs {...data1}/>
      
      </MainLayout> */}
      <Carousel>
        <CarouselItem img={123} />
        <CarouselItem img={123} />
        <CarouselItem img={123} />
        <CarouselItem img={123} />
        <CarouselItem img={123} />
        <CarouselItem img={123} />
        <CarouselItem img={123} />
        <CarouselItem img={123} />
      </Carousel>
    </div>
  );
}

export default App;
