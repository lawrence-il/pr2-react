import { Helmet } from "react-helmet";
import cup from "../../aboutOurBeans/img/cup.png";
import cup2 from "../../aboutOurBeans/img/cup2.png";
import AboutOurBeans from '../../aboutOurBeans/AboutOurBeans';
import GradesCoffeeCards from '../../gradesCoffeeCards/GradesCoffeeCards';
import ErrorBoundary from '../../errorBoundary/ErrorBoundary';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';


const ForYourPlLayout = ({toggleState, searchCoffee, filterUpdateState, visibleCoffeeCard}) => {

    return (
		<>

			<Helmet>
				{/* Primary Meta Tags */}
				<title>"For your pleasure"</title>
				<meta name="title" content="For your pleasure"></meta>

				{/* Open Graph / Facebook */}
				<meta property="og:type" content="website"></meta>
				<meta property="og:url" content="https://"></meta>
				<meta property="og:title" content="For your pleasure"></meta>
				<meta property="og:image" content="https://"></meta>

				{/* Twitter */}
				<meta property="twitter:card" content="summary_large_image"></meta>
				<meta property="twitter:url" content="https://"></meta>
				<meta property="twitter:title" content="For your pleasure"></meta>
				<meta property="twitter:image" content="https://"></meta>
        	</Helmet>


			<section className="for-your-pleasure">
						<div className="container">
						<Header toggleState={toggleState}/>
						<h1 className="for-your-pleasure__title">
							'For your pleasure'
						</h1>
						</div>
			</section>

			<AboutOurBeans classSection='about-our-goods' 
				img1={cup} 
				img2={cup2}
					/>

			<ErrorBoundary>
				<GradesCoffeeCards 
					visibleCoffeeCard={visibleCoffeeCard}
					/>
			</ErrorBoundary>
			
			<Footer/>
		</>
	);
}

export default ForYourPlLayout;