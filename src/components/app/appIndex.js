import { Component } from 'react';
import Header from '../../Header/Header';
import Promo from '../../Promo/Promo';
import AboutUs from '../../AboutUs/AboutUs';
import OurBest from '../../OurBest/OurBest';
import Footer from '../../Footer/Footer';
import '../../media.sass';

import solimoCoffeeBeansX1 from '../../OurBest/img/SolimoCoffeeBeansX1.png';
import solimoCoffeeBeansX2 from '../../OurBest/img/SolimoCoffeeBeansX2.png';
import prestoCoffeeBeansX1 from '../../OurBest/img/PrestoCoffeeBeansX1.png';
import prestoCoffeeBeansX2 from '../../OurBest/img/PrestoCoffeeBeansX2.png';
import AROMISTICOCoffeeX1 from '../../OurBest/img/AROMISTICOCoffeeX1.png';
import AROMISTICOCoffeeX2 from '../../OurBest/img/AROMISTICOCoffeeX2.png';

class appIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuHeader: [
        {text: 'Coffee house', url: '#', id: 1},
        {text: 'Our coffee', url: './coffeePage.html', id: 2},
        {text: 'For your pleasure', url: '#', id: 3},
      ],
      itemsOurBest: [
        {name: 'Solimo Coffee Beans', urlImgX1: solimoCoffeeBeansX1, urlImgX2: solimoCoffeeBeansX2, cost: 10.73, id: 1},
        {name: 'Presto Coffee Beans', urlImgX1: prestoCoffeeBeansX1, urlImgX2: prestoCoffeeBeansX2, cost: 15.99, id: 2},
        {name: 'AROMISTICO Coffee', urlImgX1: AROMISTICOCoffeeX1, urlImgX2: AROMISTICOCoffeeX2, cost: 6.99, id: 3},
        {name: 'AROMISTICO Coffee', urlImgX1: AROMISTICOCoffeeX1, urlImgX2: AROMISTICOCoffeeX2, cost: 6.99, id: 4},
      ],
    }
  }
  
  render() {
    const {menuHeader, itemsOurBest} = this.state;
    return (
        <div className="appIndex">
            <section className="promo">
                <div className="container">
                    <Header menuHeader={menuHeader}/>
                    <Promo/>
                </div>
            </section>
            <AboutUs/>
            <OurBest itemsOurBest={itemsOurBest}/>
            <Footer menuHeader={menuHeader}></Footer>
        </div>
    );
  }
  
}

export default appIndex;
