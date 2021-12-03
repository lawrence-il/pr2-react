import { Component } from 'react';
import Promo from '../../Promo/Promo';
import './appIndex.sass';

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
        <Promo menuHeader={menuHeader}/>
      </div>
    );
  }
  
}

export default appIndex;
