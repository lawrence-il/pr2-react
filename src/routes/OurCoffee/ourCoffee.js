import { Component } from 'react';
import Header from '../../Header/Header';
import aboutOurBeans from '../../aboutOurBeans/aboutOurBeans';
import GradesCoffee from '../../GradesCoffee/GradesCoffee';


import './ourCoffee.sass';
import '../../sass/text-h2.sass';


class ourCoffee extends Component {
    constructor(props) {
        super(props);
        this.state = {
			gradesCoffee: [
				{name: 'AROMISTICO Coffee 1kg', 
				urlImgX1: "./img/AROMISTICOCoffeeX1.png", 
				urlImgX2: './img/AROMISTICOCoffeeX2.png', 
				detailsImg: '',
				country: 'Brazil', 
				desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
				cost: 6.99,
				id: 1},
				{name: 'Presto Coffee Beans 1kg', 
				urlImgX1: "./img/PrestoCoffeeBeansX1.png", 
				urlImgX2: './img/PrestoCoffeeBeansX2.png', 
				detailsImg: '',
				country: 'Kenya', 
				desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
				cost: 12.77,
				id: 2},
				{name: 'Solimo Coffee Beans 2kg', 
				urlImgX1: "./img/SolimoCoffeeBeansX1.png", 
				urlImgX2: './img/SolimoCoffeeBeansX2.png', 
				detailsImg: '',
				country: 'Columbia', 
				desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
				cost: 14.99,
				id: 3},
				{name: 'AROMISTICO Coffee 1kg', 
				urlImgX1: "./img/AROMISTICOCoffeeX1.png", 
				urlImgX2: './img/AROMISTICOCoffeeX2.png', 
				detailsImg: '',
				country: 'Brazil', 
				desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
				cost: 8.99,
				id: 4},
				{name: 'Solimo Coffee Beans 2kg', 
				urlImgX1: "./img/SolimoCoffeeBeansX1.png", 
				urlImgX2: './img/SolimoCoffeeBeansX2.png', 
				detailsImg: '',
				country: 'Columbia', 
				desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
				cost: 11.99,
				id: 5},
				{name: 'Presto Coffee Beans 2kg', 
				urlImgX1: "./img/PrestoCoffeeBeansX1.png", 
				urlImgX2: './img/PrestoCoffeeBeansX2.png', 
				detailsImg: '',
				country: 'Kenya', 
				desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
				cost: 9.77,
				id: 6},
			],
			search: '',
			filter: 'All',
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

    render() {
		const {gradesCoffee, search, filter} = this.state;
		const visibleCoffeeCard = this.filterCoffee(this.showCoffee(gradesCoffee,search), filter)
            return (
            <div className="our-coffee-page">

                <section className="our-coffee">
                          <div className="container">
                            <Header/>
                            <h1 className="our-coffee__title">
                              Our Coffee
                            </h1>
                          </div>
                </section>

                {aboutOurBeans}

				<GradesCoffee 
					searchCoffee={this.searchCoffee}
					filterUpdateState={this.filterUpdateState}
					visibleCoffeeCard={visibleCoffeeCard}
					/>
				
			</div>
            );

    }
}

export default ourCoffee;