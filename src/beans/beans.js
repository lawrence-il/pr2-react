import beans from './img/beans.svg';
import '../sass/beans.sass';

const beansHTML = <div className="beans__wrapper-beans">
                    <div className="beans__line"></div>
                    <div className="beans__wrapper-img">
                    <img src={beans} alt="beans" className="beans__img" />
                    </div>
                    <div className="beans__line"></div>
                </div>


export default beansHTML;