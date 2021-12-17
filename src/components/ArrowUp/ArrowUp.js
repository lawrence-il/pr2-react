import arrow from './img/arrow.svg';
import './arrowUp.sass'
import { Component } from 'react/cjs/react.production.min';

class ArrowUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: this.props.hidden
        }
    }

    clickArrow = () => {
        this.setState({
            hidden: 0
        })
        document.documentElement.scrollTop = 0
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.hidden !== this.props.hidden) {
            this.setState({
                hidden: 1
            })
        }
    }
    render() {
        return (
            <div className="arrow-up" onClick={this.clickArrow} style={this.state.hidden ? {opacity: `${this.props.opac}`} : {opacity: 0}}>
                <img src={arrow} alt="arrow up" className="arrow-up__img" />
            </div>
        )
    }
        
}
    


export default ArrowUp;