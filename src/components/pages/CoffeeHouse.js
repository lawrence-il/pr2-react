import { useState } from 'react';
import { Helmet } from 'react-helmet';
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
            <Helmet>
				{/* Primary Meta Tags */}
				<title>Coffee House</title>
				<meta name="title" content="Everything You Love About Coffee"></meta>

				{/* Open Graph / Facebook */}
				<meta property="og:type" content="website"></meta>
				<meta property="og:url" content="https://"></meta>
				<meta property="og:title" content="Everything You Love About Coffee"></meta>
				<meta property="og:image" content="https://"></meta>

				{/* Twitter */}
				<meta property="twitter:card" content="summary_large_image"></meta>
				<meta property="twitter:url" content="https://"></meta>
				<meta property="twitter:title" content="Everything You Love About Coffee"></meta>
				<meta property="twitter:image" content="https://"></meta>
        	</Helmet>
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
