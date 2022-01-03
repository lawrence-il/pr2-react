import { useState } from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import itemsOurBest from '../../data';
import Header from '../Header/Header';
import Promo from '../promo/promo';
import aboutUs from '../aboutUs/aboutUs';
import OurBest from '../OurBest/OurBest';
import Footer from '../Footer/Footer';
import ArrowUp from '../ArrowUp/ArrowUp';


const CoffeeHouse = (props) => {

    const [toggleState, setToggleState] = useState(0);
    const [scrollCount, setScrollCount] = useState(0);
  
    const toggleMenu = (e) => {
		setToggleState((toggleState) => props.ToggleMenu(e, toggleState))
	}

    const pageUp = () => {

        const {scrollTop, scrollHeight} = document.documentElement;

        const scrollHeight25Proc = Math.round(scrollHeight / 100 * 25);
    
        if(scrollTop >= scrollHeight25Proc && scrollCount < 1) {
            
                setScrollCount(scrollCount => scrollCount + 1);
        }else if (scrollTop <= scrollHeight25Proc && scrollCount > 0) {
                
                setScrollCount(scrollCount => scrollCount - 1);
        }


    }

    return (
        <div className="app" onWheel={pageUp} onClick={toggleMenu}>
            <section className="promo">
                <div className="container">
                    <Header toggleState={toggleState}/>
                    <Promo/>
                </div>
            </section>

            {aboutUs}
          
            <ErrorBoundary>
                <OurBest itemsOurBest={itemsOurBest}/>
            </ErrorBoundary>
            
            <Footer/>

            <ArrowUp opac={scrollCount}/>

        </div>
    );
  }

export default CoffeeHouse;
