import { Component } from "react/cjs/react.production.min";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
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
            hidden: 1
        };
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
        const {gradesCoffee, toggleState, scrollCount, hidden} = this.state;
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

                <ErrorBoundary>
                    <GradesCoffeeCards visibleCoffeeCard={gradesCoffee}/>
                </ErrorBoundary>

                <Footer/>

                <ArrowUp opac={scrollCount} hidden={hidden}/>
			    </div>

        )
    }
}

export default ForYourPleasure;