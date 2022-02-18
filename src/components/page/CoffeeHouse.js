import { useState } from 'react';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import itemsOurBest from '../../data';
import Header from '../header/Header';
import promo from '../promo/promo';
import aboutUs from '../aboutUs/aboutUs';
import OurBest from '../ourBest/OurBest';
import Footer from '../footer/Footer';
import useArrowUp from '../hooks/useArrowUp/useArrowUp';


const CoffeeHouse = (props) => {

    const [toggleState, setToggleState] = useState(0);
    const {pageUp, arrowUp} = useArrowUp();
  
    const toggleMenu = (e) => {
		setToggleState((toggleState) => props.ToggleMenu(e, toggleState))
	}

    return (
        <div className="app" onWheel={pageUp} onClick={toggleMenu}>
            <section className="promo">
                <div className="container">
                    <Header toggleState={toggleState}/>
                    {promo}
                </div>
            </section>

            {aboutUs}
          
            <ErrorBoundary>
                <OurBest itemsOurBest={itemsOurBest}/>
            </ErrorBoundary>
            
            <Footer/>

            {arrowUp}

        </div>
    );
  }

export default CoffeeHouse;
