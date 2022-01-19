import cup from "../../AboutOurBeans/img/cup.png";
import cup2 from "../../AboutOurBeans/img/cup2.png";
import AboutOurBeans from '../../AboutOurBeans/AboutOurBeans';
import GradesCoffeeCards from '../../GradesCoffeeCards/GradesCoffeeCards';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';


const ForYourPleasureLayout = ({toggleState, searchCoffee, filterUpdateState, visibleCoffeeCard}) => {

    return (
		<>

			<section className={"for-your-pleasure"}>
						<div className="container">
						<Header toggleState={toggleState}/>
						<h1 className={"for-your-pleasure__title"}>
							{'For your pleasure'}
						</h1>
						</div>
			</section>

			<AboutOurBeans classSection={'about-our-goods'} 
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