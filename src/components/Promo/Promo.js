import './promo.sass';
import '../../sass/beans.sass';
import beans from '../../components/beans/img/beans.svg'

const promo = () => {
    return (
            
        <div className="promo__wrapper">
            <h1 className="promo__title">Everything You Love About Coffee</h1>
            <div className="beans__wrapper-beans">
                <div className="beans__line beans__line_white"></div>
                <div className="beans__wrapper-img">
                    <img src={beans} alt="beans" className="beans__img beans__img_white"/>
                </div>
                <div className="beans__line beans__line_white"></div>
            </div>
            <h2 className="text-h2 text-h2_one">We makes every day full of energy and taste</h2>
            <h2 className="text-h2">Want to try our beans?</h2>
            <button className="promo__btn">More</button>
        </div>

    )
}

export default promo;