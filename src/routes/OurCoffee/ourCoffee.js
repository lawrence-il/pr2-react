import { Component } from 'react';
import Header from '../../Header/Header';
import aboutOurBeans from '../../aboutOurBeans/aboutOurBeans';
import SearchPanel from "../../SearchPanel/SearchPanel";


import './ourCoffee.sass';
import '../../sass/text-h2.sass';


class ourCoffee extends Component {
    constructor(props) {
        super(props);
        this.state = {
			gradesCoffee: [
				{name: 'AROMISTICO Coffee', 
				urlImgX1: "./img/solimoCoffeeBeansX1.png", 
				urlImgX2: './img/solimoCoffeeBeansX2.png', 
				detailsImg: '',
				country: 'Brazil', 
				desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
				cost: 6.99},
				{name: 'AROMISTICO Coffee', 
				urlImgX1: "./img/solimoCoffeeBeansX1.png", 
				urlImgX2: './img/solimoCoffeeBeansX2.png', 
				detailsImg: '',
				country: 'Kenya', 
				desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
				cost: 16.99},
			],
			search: '',
		}
    }
    
	searchCoffee = (searchValue) => {
		this.setState({
			search: searchValue
		})
		
	}

    render(){
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

				<section className="grades-coffee">
					<div className="grades-coffee__filter-panel">
						<div className="container">
							<div className="grades-coffee__text">
								Lookiing for
							</div>
							<SearchPanel searchCoffee={this.searchCoffee}/>
						</div>
					</div>
        		</section>
			</div>
            );

    }
}

export default ourCoffee;