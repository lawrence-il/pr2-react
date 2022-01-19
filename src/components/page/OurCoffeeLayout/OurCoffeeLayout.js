import img1 from "../../AboutOurBeans/img/img1.png";
import img2 from "../../AboutOurBeans/img/img2.png";
import AboutOurBeans from '../../AboutOurBeans/AboutOurBeans';
import GradesCoffeeCards from '../../GradesCoffeeCards/GradesCoffeeCards';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import GradesCoffee from '../../GradesCoffee/GradesCoffee';

const OurCoffeeLayout = ({toggleState, searchCoffee, filterUpdateState, visibleCoffeeCard}) => {

    return (
		<>
			<section className={"our-coffee"}>
						<div className="container">
						<Header toggleState={toggleState}/>
						<h1 className={"our-coffee__title"}>
							{'Our Coffee'}
						</h1>
						</div>
			</section>

			<AboutOurBeans classSection={'about-our-beans'} 
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