import arrow from './img/arrow.svg';
import './arrowUp.sass'

const ArrowUp = ({opac}) => {
        return <div className="arrow-up" style={{opacity: `${opac}`}}>
                    <img src={arrow} alt="arrow up" className="arrow-up__img" />
                </div>
}
    


export default ArrowUp;