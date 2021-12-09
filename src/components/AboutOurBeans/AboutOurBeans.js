import beansHTML from '../../beans/beans';
import './aboutOurBeans.sass';



const AboutOurBeans = ({classSection, img1, img2}) => {
    return (
        <section className={classSection}>
        <div className="container">
            <div className={`${classSection}__wrapper`}>

                <div className={`${classSection}__wrapper-img`}>
                    <img src={img1} srcSet={`${img1} 1x, ${img2} 2x`} alt="our coffee" className={`${classSection}__img`} />
                </div>
                <div className={`${classSection}__desc`}>
                    <h2 className="text-h2 text-h2_one text-h2_black">{classSection === 'about-our-beans' ? 'About our beans' : 'About our goods'}</h2>
                    {beansHTML}
                    <p className={`${classSection}__par`}>
                        {classSection === 'about-our-beans' ? 
                                                <span>Extremity sweetness difficult behaviour he of. <br />
                                                    On disposal of as landlord horrible.
                                                </span> 
                                                    :
                                                <span>"Lorem ipsum dolor sit amet, 
                                                    consectetur adipiscing elit, 
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </span>}
                    </p>
                    <p className={`${classSection}__par`}>
                        Afraid at highly months do things on at.
                        Situation <br /> recommend objection do intention <br /> so questions. 
                    </p>
                    <p className={`${classSection}__par`}>
                        As greatly removed calling pleased improve an. <br />
                        Last ask him cold feel <br /> met spot shy want.
                    </p>
                    <p className={`${classSection}__par`}>
                        Children me laughing we <br /> prospect answered followed. 
                        At it went <br /> is song that held help face
                    </p>
                </div>
            </div>
            <div className={`${classSection}__line`}></div>
        </div>
    </section>
    )
}
    

export default AboutOurBeans;