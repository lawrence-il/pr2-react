import arrow from './img/arrow.svg';
import './arrowUp.sass'


const ArrowUp = (props) => {

    const clickArrow = () => {
        document.documentElement.scrollTop = 0
    }
   
    return (
        <div className="arrow-up" onClick={clickArrow} style={{opacity: `${props.opac}`}}>
            <img src={arrow} alt="arrow up" className="arrow-up__img" />
        </div>
    )
        
}
    


export default ArrowUp;