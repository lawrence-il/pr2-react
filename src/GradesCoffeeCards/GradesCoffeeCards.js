import { Link, Outlet } from "react-router-dom";

const GradesCoffeeCards = ({visibleCoffeeCard}) => {
    const cards = visibleCoffeeCard.map(({id, name, urlImgX1, urlImgX2, country, cost}) => (
        <Link key={id} className="grades-coffee__card" to={`/ourCoffee/${id}` } >
            <div className="grades-coffee__wrapper-img">
                <img src={urlImgX1} alt={name} className="grades-coffee__img"/>
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
        <div className="grades-coffee__cards">
            {cards}
            <Outlet/>
        </div>
        
    )
}

export default GradesCoffeeCards;