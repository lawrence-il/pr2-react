import { Fragment } from 'react';
import './OurBest.sass';
import '../sass/text-h2.sass';

const OurBest = ({itemsOurBest}) => {
    const elements = itemsOurBest.map(({name, urlImgX1, urlImgX2, cost, id}) => (
        <Fragment key={id}>
            <div className="our-best__wrapper-item">
                <div className="our-best__wrapper-img">
                    <img src={urlImgX1} srcSet={`${urlImgX1} x1, ${urlImgX2} x2`} alt={name} className="our-best__img"/>
                </div>
                <div className="our-best__subtitle">
                    {name}
                </div>
                <div className="our-best__cost">
                    {`${cost}$`}
                </div>
            </div>
        </Fragment>
    ))
    
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