import { Component } from 'react';
import gradesCoffee from '../../data';
import Header from '../../Header/Header';
import aboutOurBeans from '../../aboutOurBeans/aboutOurBeans';
import GradesCoffee from '../../GradesCoffee/GradesCoffee';
import Footer from '../../Footer/Footer';


import './ourCoffee.sass';
import '../../sass/text-h2.sass';


class ourCoffee extends Component {
    constructor(props) {
        super(props);
        this.state = {
			gradesCoffee: gradesCoffee,
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
				<Footer/>
			</div>
            );

    }
}

export default ourCoffee;