import Carousel,{ CarouselItem } from "./Corusel";

function App({url, img}) {
    if(url && img){
      return (
          <a href={{url}}><CarouselItem>{img}</CarouselItem></a>
      )
      } else if (img){
        return (
            <a href='/'><CarouselItem>{img}</CarouselItem></a>
        )
      } 
    
  }
  
  export default App;