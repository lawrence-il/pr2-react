import { useState } from 'react';
import { useLocation } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import gradesCoffee from "../data";
import beansHTML from "../beans/beans";
import '../routes/OurCoffee/ourCoffee.sass';
import './aboutIt.sass'



const AboutIt = ({ToggleMenu}) => {

    let location = useLocation();
    let id = +location.pathname.match(/\d+/);

    const choiceItem = gradesCoffee.filter(item => item.id === id);
    const {name, urlDetailsImg, desc, country, cost} = choiceItem[0];

    let [toggleState, setToggleState] = useState(0);

    const toggleMenu = (e) => {
		let toggleStateMenu = ToggleMenu(e, toggleState);
		setToggleState(toggleStateMenu);
	  }
    
    return <div className="our-coffee-page" onClick={toggleMenu}>

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
                        <img src={urlDetailsImg} alt={name} className="about-it__img" />
                    </div>
                    <div className="about-it__desc">
                        <h2 className="text-h2 text-h2_one text-h2_black">About our beans</h2>
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
}

export default AboutIt;