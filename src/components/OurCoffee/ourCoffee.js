import { Component } from 'react';
import gradesCoffee from '../../data';
import Header from '../Header/Header';
import img1 from "../AboutOurBeans/img/img1.png";
import img2 from "../AboutOurBeans/img/img2.png";
import AboutOurBeans from '../AboutOurBeans/AboutOurBeans';
import GradesCoffee from '../GradesCoffee/GradesCoffee';
import GradesCoffeeCards from '../GradesCoffeeCards/GradesCoffeeCards'
import Footer from '../Footer/Footer';
import ArrowUp from '../ArrowUp/ArrowUp';


import './ourCoffee.sass';


class ourCoffee extends Component {
    constructor(props) {
        super(props);
        this.state = {
			gradesCoffee: gradesCoffee,
			search: '',
			filter: 'All',
			toggleState: 0,
			scrollCount: 0,
		}
    }
    
	showCoffee = (gradesCoffee, search) => {
		if(search.length === 0) {
			return gradesCoffee
		}
		
		return gradesCoffee.filter(item => item.name.indexOf(search) > -1)
	}

	searchCoffee = (searchValue) => {
		this.setState({
			search: searchValue
		})	
	}

	filterUpdateState = (filterValue) => {
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

		const {scrollTop, scrollWidth} = document.documentElement
	
		this.setState(({scrollCount}) => {
		  if(scrollTop >= 300 && scrollCount < 1) {
			return {
			  scrollCount: scrollTop <= scrollWidth ? 1 : scrollCount + 0.25
			  }
		  } else if (scrollTop <= 300 && scrollCount > 0) {
			  return {
				scrollCount: scrollTop <= 100 ? 0 : scrollCount - 0.35
				}
		  }
		})
			 
	  }

    render() {
		const {gradesCoffee, search, filter, toggleState, scrollCount} = this.state;
		const visibleCoffeeCard = this.filterCoffee(this.showCoffee(gradesCoffee,search), filter)
            return (
            <div className="our-coffee-page" onWheel={this.pageUp} onClick={this.toggleMenu}>

                <section className="our-coffee">
                          <div className="container">
                            <Header toggleState={toggleState}/>
                            <h1 className="our-coffee__title">
                              Our Coffee
                            </h1>
                          </div>
                </section>

                <AboutOurBeans classSection='about-our-beans' img1={img1} img2={img2}/>

				<GradesCoffee 
					searchCoffee={this.searchCoffee}
					filterUpdateState={this.filterUpdateState}
					/>
				<GradesCoffeeCards visibleCoffeeCard={visibleCoffeeCard}/>

				<Footer/>

				<ArrowUp opac={scrollCount}/>
			</div>
            );

    }
}

export default ourCoffee;