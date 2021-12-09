import { Component } from "react/cjs/react.production.min";
import gradesCoffee from '../data';
import Header from '../Header/Header';
import img from './img/cup.png';
import AboutOurBeans from '../AboutOurBeans/AboutOurBeans';
import GradesCoffeeCards from '../GradesCoffeeCards/GradesCoffeeCards'
import Footer from '../Footer/Footer';
import './forYourPleasure.sass';


class ForYourPleasure extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gradesCoffee: gradesCoffee,
            toggleState: 0,
        };
    }

    toggleMenu = (e) => {
		const toggleState = this.props.ToggleMenu(e, this.state.toggleState);
		this.setState({
		  toggleState: toggleState
		})
	}

    render() {
        const {gradesCoffee, toggleState} = this.state;
        return (
            <div className="for-your-pleasure-page" onClick={this.toggleMenu}>

                <section className="for-your-pleasure">
                          <div className="container">
                            <Header toggleState={toggleState}/>
                            <h1 className="for-your-pleasure__title">
                                For your pleasure
                            </h1>
                          </div>
                </section>

                <AboutOurBeans classSection='about-our-goods' img={img}/>

				<GradesCoffeeCards visibleCoffeeCard={gradesCoffee}/>

				<Footer/>
			</div>

        )
    }
}

export default ForYourPleasure;