import React, { useEffect, useState } from 'react'
import '../title/style.scss'



export const CarouselItem = ({children, width}) => {
  return (
    <div className='carousel-item' style={{width: width}}>
        {children}
    </div>
  )
};




const Carousel = ({children}) => {

    const [activeIndex, setActiveIndex] = useState(0)

    const [paused, setPaused] = useState(false)

    const updateIndex = (newIndex) => {
        if(newIndex < 0){
            newIndex = React.Children.count(children) - 1/5
        } else if(newIndex *3.2 +1 >= React.Children.count(children)){
            newIndex = 0
        }
        console.log(`${newIndex *3.2 + 1}-newIndex`);
        setActiveIndex(newIndex)
    }

    useEffect(()=>{
        const interval = setInterval(()=>{
            if (!paused){
                updateIndex(activeIndex + 1/5)
            }
        }, 1000)

        return () => {
            if (interval) {
                clearInterval(interval)
            }
        }
    })



  return (
    <div
        className='carousel'
        onMouseEnter={()=> setPaused(true)}
        onMouseLeave={()=> setPaused(false)}
    >
        <div className='inner' style={{transform: `translateX(-${activeIndex * 750}px)`}}>
        {console.log(activeIndex)}
            {React.Children.map(children, (child, index) => {
                return React.cloneElement(child, {width: '360px'})
            })}

        </div>

    </div>
  )
}

export default Carousel