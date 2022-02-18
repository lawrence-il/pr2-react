import { Helmet } from "react-helmet";
import img1 from "../../aboutOurBeans/img/img1.png";
import img2 from "../../aboutOurBeans/img/img2.png";
import AboutOurBeans from '../../aboutOurBeans/AboutOurBeans';
import GradesCoffeeCards from '../../gradesCoffeeCards/GradesCoffeeCards';
import ErrorBoundary from '../../errorBoundary/ErrorBoundary';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import GradesCoffee from '../../gradesCoffee/GradesCoffee';

const OurCoffeeLayout = ({toggleState, searchCoffee, filterUpdateState, visibleCoffeeCard}) => {

    return (
		<>

			<Helmet>
				{/* Primary Meta Tags */}
				<title>"Our coffee"</title>
				<meta name="title" content="Our coffee"></meta>

				{/* Open Graph / Facebook */}
				<meta property="og:type" content="website"></meta>
				<meta property="og:url" content="https://"></meta>
				<meta property="og:title" content="Our coffee"></meta>
				<meta property="og:image" content="https://"></meta>

				{/* Twitter */}
				<meta property="twitter:card" content="summary_large_image"></meta>
				<meta property="twitter:url" content="https://"></meta>
				<meta property="twitter:title" content="Our coffee"></meta>
				<meta property="twitter:image" content="https://"></meta>
        	</Helmet>
			<section className="our-coffee">
						<div className="container">
						<Header toggleState={toggleState}/>
						<h1 className="our-coffee__title">
							'Our Coffee'
						</h1>
						</div>
			</section>

			<AboutOurBeans classSection='about-our-beans' 
				img1={img1} 
				img2={img2}
					/>

			<ErrorBoundary>
                <GradesCoffee searchCoffee={searchCoffee} filterUpdateState={filterUpdateState}/>
			</ErrorBoundary>

			<ErrorBoundary>
				<GradesCoffeeCards 
					visibleCoffeeCard={visibleCoffeeCard}
					/>
			</ErrorBoundary>
			
			<Footer/>
		</>
	);
}

export default OurCoffeeLayout;