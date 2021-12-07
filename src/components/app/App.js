import { Component } from 'react';
import itemsOurBest from '../../data';
import Header from '../../Header/Header';
import Promo from '../../Promo/Promo';
import aboutUs from '../../aboutUs/AboutUs';
import OurBest from '../../OurBest/OurBest';
import Footer from '../../Footer/Footer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsOurBest: itemsOurBest,
    }
  }
  
  render() {
    const {itemsOurBest} = this.state;
    return (
        <div className="app">
            <section className="promo">
                <div className="container">
                    <Header/>
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
