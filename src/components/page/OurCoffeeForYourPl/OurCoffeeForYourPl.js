import { Component } from 'react';
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


class ourCoffee extends Component {
    constructor(props) {
        super(props);
        this.state = {
			gradesCoffee: gradesCoffee,
			search: '',
			filter: 'All',
			toggleState: 0,
			scrollCount: 0,
			hidden: 1,
		}
    }

	showCoffee = (gradesCoffee, search) => {
		if(search.length === 0) {
			return gradesCoffee
		}
		
		return gradesCoffee.filter(item => item.name.indexOf(search) > -1)
	}

	searchCoffee = (searchValue) => { // приходит значение из input
		this.setState({
			search: searchValue
		})	
	}

	filterUpdateState = (filterValue) => { // значение фильтра
		this.setState({
			filter: this.state.filter === filterValue ? 'All' : filterValue
		})
	}

	filterCoffee = (data, filter) => {
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

	toggleMenu = (e) => {
		const toggleState = this.props.ToggleMenu(e, this.state.toggleState);
		this.setState({
		  toggleState: toggleState
		})
	}


	pageUp = () => {

		const {scrollTop, scrollHeight} = document.documentElement;
	
		const scrollHeight25Proc = Math.round(scrollHeight / 100 * 25);
	 
		this.setState(({scrollCount}) => {
		  if(scrollTop >= scrollHeight25Proc && scrollCount < 1) {
			return {
			  hidden: 1,
			  scrollCount: scrollCount + 1
			}
		  } else if (scrollTop <= scrollHeight25Proc && scrollCount > 0) {
			  return {
				hidden: 1,
				scrollCount: scrollCount - 1
			  }
		  } 
		})       
	  }

    render() {
		const {pathname} = window.location

		const {gradesCoffee, search, filter, toggleState, scrollCount, hidden} = this.state;
		const visibleCoffeeCard = this.filterCoffee(this.showCoffee(gradesCoffee, search), filter)

            return (
            <div className={pathname === '/ourCoffee' ? "our-coffee-page" : "for-your-pleasure-page"} 
				onWheel={this.pageUp} 
				onClick={this.toggleMenu}
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
					{this.props.render(this.searchCoffee, this.filterUpdateState)}
				</ErrorBoundary>

				<ErrorBoundary>
					<GradesCoffeeCards 
						visibleCoffeeCard={visibleCoffeeCard}
						/>
				</ErrorBoundary>
				
				<Footer/>

				<ArrowUp opac={scrollCount} hidden={hidden}/>
			</div>
            );

    }
}

export default ourCoffee;