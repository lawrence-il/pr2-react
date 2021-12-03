import PromoHeader from '../PromoHeader/PromoHeader';
import './promo.sass';
import '../sass/subtitle.sass';
import '../sass/beans.sass';
import beans from './img/beans.svg'

const Promo = ({menuHeader}) => {
    const href = menuHeader.map(item => {
        return (
            <PromoHeader 
                key={item.id}
                text={item.text}
                href={item.url}
                />
        )
    })
    console.log(href);
    return (
        <section className="promo">
            <div className="container">
                <header className="promo__header">
                    <ul>
                        {href}
                    </ul>
                </header>
            
                <div className="promo__wrapper">
                    <h1 className="promo__title">Everything You Love About Coffee</h1>
                    <div className="beans__wrapper-beans">
                        <div className="beans__line"></div>
                        <div className="beans__wrapper-img">
                            <img src={beans} alt="beans" className="beans__img" />
                        </div>
                        <div className="beans__line"></div>
                    </div>
                    <h2 className="subtitle subtitle_one">We makes every day full of energy and taste</h2>
                    <h2 className="subtitle">Want to try our beans?</h2>
                    <button className="promo__btn">More</button>
                </div>
            </div>
        </section>
    )
}

export default Promo;