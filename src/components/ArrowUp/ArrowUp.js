import { useState, useEffect } from 'react';
import arrow from './img/arrow.svg';
import './arrowUp.sass'


const ArrowUp = (props) => {

    const [hidden, setHidden] = useState(props.hidden);
    

    useEffect(() => {
        setHidden(0)
    },[hidden])

    useEffect(() => {
        setHidden(1)
    },[])

    const clickArrow = () => {
        setHidden(1)
        document.documentElement.scrollTop = 0
    }

        
    return (
        <div className="arrow-up" onClick={clickArrow} style={hidden ? {opacity: `${props.opac}`} : {opacity: 0}}>
            <img src={arrow} alt="arrow up" className="arrow-up__img" />
        </div>
    )
        
}
    


export default ArrowUp;