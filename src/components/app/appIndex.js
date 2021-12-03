import { Component } from 'react';
import Header from '../../Header/Header';
import Promo from '../../Promo/Promo';
import AboutUs from '../../AboutUs/AboutUs';
import '../../media.sass';

class appIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuHeader: [
        {text: 'Coffee house', url: '#', id: 1},
        {text: 'Our coffee', url: '#', id: 2},
        {text: 'For your pleasure', url: '#', id: 3},
      ]
    }
  }
  
  render() {
    const {menuHeader} = this.state;
    return (
        <div className="appIndex">
            <section className="promo">
                <div className="container">
                    <Header menuHeader={menuHeader}/>
                    <Promo/>
                </div>
            </section>
            <AboutUs/>
        </div>
    );
  }
  
}

export default appIndex;
