import { Component } from "react/cjs/react.production.min";
import gradesCoffee from '../../data';
import Header from '../Header/Header';
import img1 from './img/cup.png';
import img2 from "./img/cup2.png";
import AboutOurBeans from '../AboutOurBeans/AboutOurBeans';
import GradesCoffeeCards from '../GradesCoffeeCards/GradesCoffeeCards'
import Footer from '../Footer/Footer';
import ArrowUp from "../ArrowUp/ArrowUp";
import './forYourPleasure.sass';


class ForYourPleasure extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gradesCoffee: gradesCoffee,
            toggleState: 0,
            scrollCount: 0,
        };
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
        const {gradesCoffee, toggleState, scrollCount} = this.state;
        return (
            <div className="for-your-pleasure-page" onWheel={this.pageUp} onClick={this.toggleMenu}>

                <section className="for-your-pleasure">
                          <div className="container">
                            <Header toggleState={toggleState}/>
                            <h1 className="for-your-pleasure__title">
                                For your pleasure
                            </h1>
                          </div>
                </section>

                <AboutOurBeans classSection='about-our-goods' img1={img1} img2={img2}/>

				<GradesCoffeeCards visibleCoffeeCard={gradesCoffee}/>

				<Footer/>

                <ArrowUp opac={scrollCount}/>
			</div>

        )
    }
}

export default ForYourPleasure;