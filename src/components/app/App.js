import { Component } from 'react';
import Header from '../../Header/Header';
import Promo from '../../Promo/Promo';
import aboutUs from '../../aboutUs/AboutUs';
import OurBest from '../../OurBest/OurBest';
import Footer from '../../Footer/Footer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsOurBest: [
        {name: 'Solimo Coffee Beans', urlImgX1: "./img/solimoCoffeeBeansX1.png", urlImgX2: './img/solimoCoffeeBeansX2.png', cost: 10.73, id: 1},
        {name: 'Presto Coffee Beans', urlImgX1: "./img/prestoCoffeeBeansX1.png", urlImgX2: './img/prestoCoffeeBeansX2.png', cost: 15.99, id: 2},
        {name: 'AROMISTICO Coffee', urlImgX1: './img/AROMISTICOCoffeeX1.png', urlImgX2: './img/AROMISTICOCoffeeX2.png', cost: 6.99, id: 3},
        {name: 'AROMISTICO Coffee', urlImgX1: './img/AROMISTICOCoffeeX1.png', urlImgX2: './img/AROMISTICOCoffeeX2.png', cost: 6.99, id: 4},
      ],
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
