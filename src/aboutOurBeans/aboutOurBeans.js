import beansHTML from '../beans/beans';
import img from "./img/img1.png";
import './aboutOurBeans.sass';


const aboutOurBeans = 
    <section className="about-our-beans">
    <div className="container">
        <div className="about-our-beans__wrapper">

            <div className="about-our-beans__wrapper-img">
                <img src={img} alt="our coffee" className="about-our-beans__img" />
            </div>
            <div className="about-our-beans__desc">
                <h2 className="text-h2 text-h2_one text-h2_black">About our beans</h2>
                {beansHTML}
                <p className="about-our-beans__par">
                    Extremity sweetness difficult behaviour he of. <br />
                    On disposal of as landlord horrible.
                </p>
                <p className="about-our-beans__par">
                    Afraid at highly months do things on at.
                    Situation <br /> recommend objection do intention <br /> so questions. 
                </p>
                <p className="about-our-beans__par">
                    As greatly removed calling pleased improve an. <br />
                    Last ask him cold feel <br /> met spot shy want.
                </p>
                <p className="about-our-beans__par">
                    Children me laughing we <br /> prospect answered followed. 
                    At it went <br /> is song that held help face
                </p>
            </div>
        </div>
        <div className="about-our-beans__line"></div>
    </div>
    </section>

export default aboutOurBeans;