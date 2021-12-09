import { Component } from 'react';
import itemsOurBest from '../../data';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import aboutUs from '../../aboutUs/AboutUs';
import OurBest from '../OurBest/OurBest';
import Footer from '../Footer/Footer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsOurBest: itemsOurBest,
      toggleState: 0,
    }
  }
  
  toggleMenu = (e) => {
    const toggleState = this.props.ToggleMenu(e, this.state.toggleState);
    this.setState({
      toggleState: toggleState
    })
  }

  render() {
    const {itemsOurBest, toggleState} = this.state;
    return (
        <div className="app" onClick={this.toggleMenu}>
            <section className="promo">
                <div className="container">
                    <Header toggleState={toggleState}/>
                    <Promo/>
                </div>
            </section>
            {aboutUs}
            <OurBest itemsOurBest={itemsOurBest}/>
            <Footer/>
        </div>
    );
  }
  
}

export default App;
