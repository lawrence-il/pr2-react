import { useState } from 'react';
import arrow from './img/arrow.svg';
import './useArrowUp.sass'


const useArrowUp = () => {
    const [hidden, setHidden] = useState(1);
    const [scrollCount, setScrollCount] = useState(0);
    
    const pageUp = () => {

        const {scrollTop, scrollHeight} = document.documentElement;

        const scrollHeight25Proc = Math.round(scrollHeight / 100 * 25);
    
        if(scrollTop >= scrollHeight25Proc && scrollCount < 1) {
                setHidden(1)
                setScrollCount(scrollCount => scrollCount + 1);
        }else if (scrollTop <= scrollHeight25Proc && scrollCount > 0) {
                
                setScrollCount(scrollCount => scrollCount - 1);
        }

    }
    
    const clickArrow = () => {
        document.documentElement.scrollTop = 0;
        setHidden(0)
    }
   
    const view =
    <div className="arrow-up" onClick={clickArrow} style={hidden ? {opacity: `${scrollCount}`, visibility: scrollCount < 0.10 ? 'hidden' : 'visible'} : {opacity: 0, visibility: 'hidden'}}>
            <img src={arrow} alt="arrow up" className="arrow-up__img" />
        </div>
    

    return {pageUp, view}
        
}

export default useArrowUp;