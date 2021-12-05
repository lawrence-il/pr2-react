import { Component } from 'react';
import Header from '../../Header/Header';
import aboutOurBeans from '../../aboutOurBeans/aboutOurBeans';


import './ourCoffee.sass';
import '../../sass/text-h2.sass';


class ourCoffee extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render(){
            return (
              <div className="our-coffee-page">

                <section className="our-coffee">
                          <div className="container">
                            <Header/>
                            <h1 className="our-coffee__title">
                              Our Coffee
                            </h1>
                          </div>
                        </section>
                {aboutOurBeans}
			  </div>
            );

    }
}

export default ourCoffee;