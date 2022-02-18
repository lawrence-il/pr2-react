import cup from "../../aboutOurBeans/img/cup.png";
import cup2 from "../../aboutOurBeans/img/cup2.png";
import AboutOurBeans from '../../aboutOurBeans/AboutOurBeans';
import GradesCoffeeCards from '../../gradesCoffeeCards/GradesCoffeeCards';
import ErrorBoundary from '../../errorBoundary/ErrorBoundary';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';


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