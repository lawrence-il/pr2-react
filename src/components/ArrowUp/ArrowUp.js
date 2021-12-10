import arrow from './img/arrow.svg';
import './arrowUp.sass'
import { Component } from 'react/cjs/react.production.min';

class ArrowUp extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    clickArrow = () => {
        document.documentElement.scrollTop = 0
    }

    render() {
        return (
            <div className="arrow-up" onClick={this.clickArrow} style={{opacity: `${this.props.opac}`}}>
                <img src={arrow} alt="arrow up" className="arrow-up__img" />
            </div>
        )
    }
        
}
    


export default ArrowUp;