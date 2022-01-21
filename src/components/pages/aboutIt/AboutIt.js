import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import gradesCoffee from "../../../data";
import beansHTML from "../../beans/beans";
import '../ourCoffeeForYourPl/OurCoffeeForYourPl';
import './aboutIt.sass'


const AboutIt = ({ToggleMenu}) => {

    let [toggleState, setToggleState] = useState(0);

    let {id} = useParams();
    const choiceItem = gradesCoffee.filter(item => item.id === +id);
    const {name, urlDetailsImg, urlDetailsImg2, desc, country, cost} = choiceItem[0];

    const toggleMenu = (e) => {
		let toggleStateMenu = ToggleMenu(e, toggleState);
		setToggleState(toggleStateMenu);
	  }
    
    return (
    <div className="our-coffee-page" onClick={toggleMenu}>
        <Helmet>
            {/* Primary Meta Tags */}
            <title>About it</title>
            <meta name="title" content="About it"></meta>

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website"></meta>
            <meta property="og:url" content="https://"></meta>
            <meta property="og:title" content="About it"></meta>
            <meta property="og:image" content="https://"></meta>

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image"></meta>
            <meta property="twitter:url" content="https://"></meta>
            <meta property="twitter:title" content="About it"></meta>
            <meta property="twitter:image" content="https://"></meta>
        </Helmet>
        <section className="our-coffee">
                    <div className="container">
                    <Header toggleState={toggleState}/>
                    <h1 className="our-coffee__title">
                        Our Coffee
                    </h1>
                    </div>
        </section>
    
        <section className="about-it">
            <div className="container">
                <div className="about-it__wrapper">

                    <div className="about-it__wrapper-img">
                        <img src={urlDetailsImg} srcSet={`${urlDetailsImg} 1x, ${urlDetailsImg2} 2x`} alt={name} className="about-it__img" />
                    </div>
                    <div className="about-it__desc">
                        <h2 className="text-h2 text-h2_one text-h2_black">About it</h2>
                        {beansHTML}
                        <div className="about-it__country">
                            <span>Country: </span>
                            {country}
                        </div>
                        <div className="about-it__text">
                            <span>Description: </span>
                            {desc}
                        </div>
                        <div className="about-it__cost">
                            <span>Price: </span>
                            {`${cost}$`}
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <Footer/>
    </div>
    )
}

export default AboutIt;