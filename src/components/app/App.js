import { Component } from 'react';
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
    }
  }
  
  toggleMenu = (e) => {
    const toggleState = this.props.ToggleMenu(e, this.state.toggleState);
    this.setState({
      toggleState: toggleState
    })
  }

  pageUp = () => {
    this.setState(({scrollCount}) => {

      if(document.documentElement.scrollTop >= 300 && scrollCount < 1) {
        console.log(document.documentElement.scrollTop)
        return {
          scrollCount:  scrollCount + 0.5
          }
      } else if (document.documentElement.scrollTop <= 300 && scrollCount > 0) {
        console.log(document.documentElement.scrollTop)
        return {
          scrollCount: scrollCount - 0.5
          }
      }
    })
         
  }

  render() {
    console.log(document.documentElement.scrollTop);
    const {itemsOurBest, toggleState, scrollCount} = this.state;
    return (
        <div className="app" onWheel={this.pageUp} onClick={this.toggleMenu}>
            <section className="promo">
                <div className="container">
                    <Header toggleState={toggleState}/>
                    <Promo/>
                </div>
            </section>

            {aboutUs}
          
            <OurBest itemsOurBest={itemsOurBest}/>
            
            <Footer/>

            <ArrowUp opac={scrollCount}/>

        </div>
    );
  }
  
}

export default App;
