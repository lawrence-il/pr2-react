import { useState } from 'react';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';
import gradesCoffee from '../../../data';
import Header from '../../Header/Header';
import img1 from "../../AboutOurBeans/img/img1.png";
import img2 from "../../AboutOurBeans/img/img2.png";
import cup from "../../AboutOurBeans/img/cup.png"
import cup2 from "../../AboutOurBeans/img/cup2.png"
import AboutOurBeans from '../../AboutOurBeans/AboutOurBeans';
import GradesCoffeeCards from '../../GradesCoffeeCards/GradesCoffeeCards'
import Footer from '../../Footer/Footer';
import ArrowUp from '../../ArrowUp/ArrowUp';


import './OurCoffeeForYourPl.sass';


const OurCoffee = (props) => {


	const [gradesCof, setGradesCoffee] = useState(gradesCoffee);
	const [search, setSearch] = useState('');
	const [filter, setFilter] = useState('All');
	const [toggleState, setToggleState] = useState(0);
	const [scrollCount, setScrollCount] = useState(0);

	const showCoffee = (gradesCof, search) => {
		if(search.length === 0) {
			return gradesCof
		}
		
		return gradesCof.filter(item => item.name.indexOf(search) > -1)
	}

	const searchCoffee = (searchValue) => { // приходит значение из input
		setSearch(searchValue)	
	}

	const filterUpdateState = (filterValue) => { // значение фильтра
		setFilter(filter === filterValue ? 'All' : filterValue)
	}

	const filterCoffee = (data, filter) => {
		switch(filter) { 
			case 'Brazil':
				return data.filter(item => item.country === 'Brazil');
			case 'Kenya':
				return data.filter(item => item.country === 'Kenya');
			case 'Columbia':
				return data.filter(item => item.country === 'Columbia');
			default:
				return data;
		}
	}

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

		const {pathname} = window.location;

		const visibleCoffeeCard = filterCoffee(showCoffee(gradesCof, search), filter);

		return (
			<div className={pathname === '/ourCoffee' ? "our-coffee-page" : "for-your-pleasure-page"} 
				onWheel={pageUp} 
				onClick={toggleMenu}
				>

				<section className={pathname === '/ourCoffee' ? "our-coffee" : "for-your-pleasure"} >
							<div className="container">
							<Header toggleState={toggleState}/>
							<h1 className={pathname === '/ourCoffee' ? "our-coffee__title" : "for-your-pleasure__title"}>
								{pathname === '/ourCoffee' ? 'Our Coffee' : 'For your pleasure'}
							</h1>
							</div>
				</section>

				<AboutOurBeans classSection={pathname === '/ourCoffee' ? 'about-our-beans' : 'about-our-goods'} 
					img1={pathname === '/ourCoffee' ? img1 : cup} 
					img2={pathname === '/ourCoffee' ? img2 : cup2}
						/>

				<ErrorBoundary>
					{props.render(searchCoffee, filterUpdateState)}
				</ErrorBoundary>

				<ErrorBoundary>
					<GradesCoffeeCards 
						visibleCoffeeCard={visibleCoffeeCard}
						/>
				</ErrorBoundary>
				
				<Footer/>

				<ArrowUp opac={scrollCount}/>
			</div>
		);

    }


export default OurCoffee;