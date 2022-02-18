import { Link } from 'react-router-dom';
import './OurBest.sass';


const OurBest = ({itemsOurBest}) => {
    const elements = itemsOurBest.map(({name, urlImgX1, urlImgX2, cost, id, best}) => {
        if (best) {
            return (
                <Link key={id} className="our-best__wrapper-item" to={`/ourCoffee/about-it/${id}`}>
                    <div className="our-best__wrapper-img">
                        <img src={urlImgX1} srcSet={`${urlImgX1} 1x, ${urlImgX2} 2x`} alt={name} className="our-best__img"/>
                    </div>
                    <div className="our-best__subtitle">
                        {name}
                    </div>
                    <div className="our-best__cost">
                        {`${cost}$`}
                    </div>
                </Link>
        )}  
        return '';
    })
    
    
    return (
        <section className="our-best">
            <div className="container">
                <h2 className="text-h2 text-h2_black">Our best</h2>
                <div className="our-best__wrapper-items">
                        {elements}
                </div>
            </div>
        </section>
        
    )
}

export default OurBest;