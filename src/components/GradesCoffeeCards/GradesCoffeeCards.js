import { Link } from "react-router-dom";
import './gradesCoffeeCards.sass';

const GradesCoffeeCards = ({visibleCoffeeCard}) => {
    const cards = visibleCoffeeCard.map(({id, name, urlImgX1, urlImgX2, country, cost}) => (
        <Link key={id} className="grades-coffee__card" to={`/ourCoffee/about-it/${id}` } >
            <div className="grades-coffee__wrapper-img">
                <img src={urlImgX1} srcSet={`${urlImgX1} 1x, ${urlImgX2} 2x`} alt={name} className="grades-coffee__img"/>
            </div>
            <div className="grades-coffee__title">
                {name}
            </div>
            <div className="grades-coffee__country">
                {country}
            </div>

            <div className="grades-coffee__cost">
                {`${cost}$`}
            </div>
        </Link>
    ))
    return (

    <div className="container">
        <div className="grades-coffee__cards">
            {cards}
        </div>
    </div>  
    )
}

export default GradesCoffeeCards;