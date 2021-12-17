import { Component } from 'react';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import itemsOurBest from '../../data';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import aboutUs from '../../aboutUs/AboutUs';
import OurBest from '../OurBest/OurBest';
import Footer from '../Footer/Footer';
import ArrowUp from '../ArrowUp/ArrowUp';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsOurBest: itemsOurBest,
      toggleState: 0,
      scrollCount: 0,
      hidden: 1
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
          hidden: 1,
          scrollCount: scrollTop <= scrollWidth ? 1 : scrollCount + 0.25
          }
      } else if (scrollTop <= 300 && scrollCount > 0) {
          return {
            hidden: 1,
            scrollCount: scrollTop <= 100 ? 0 : scrollCount - 0.35
            }
      }
    })
         
  }

  render() {
    const {itemsOurBest, toggleState, scrollCount, hidden} = this.state;
    return (
        <div className="app" onWheel={this.pageUp} onClick={this.toggleMenu}>
            <section className="promo">
                <div className="container">
                    <Header toggleState={toggleState}/>
                    <Promo/>
                </div>
            </section>

            {aboutUs}
          
            <ErrorBoundary>
                <OurBest itemsOurBest={itemsOurBest}/>
            </ErrorBoundary>
            
            <Footer/>

            <ArrowUp opac={scrollCount} hidden={hidden}/>

        </div>
    );
  }
  
}

export default App;
