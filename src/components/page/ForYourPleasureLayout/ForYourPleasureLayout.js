import cup from "../../AboutOurBeans/img/cup.png";
import cup2 from "../../AboutOurBeans/img/cup2.png";
import AboutOurBeans from '../../AboutOurBeans/AboutOurBeans';
import GradesCoffeeCards from '../../GradesCoffee/GradesCoffee';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import GradesCoffee from '../../GradesCoffee/GradesCoffee';

const ForYourPleasureLayout = ({toggleState, searchCoffee, filterUpdateState, visibleCoffeeCard}) => {

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

export default ForYourPleasureLayout;