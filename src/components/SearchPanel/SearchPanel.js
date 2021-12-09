import { Component } from 'react';


class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
        };
    }

    searchCoffee = (e) => {
        this.setState({
            search: e.target.value
        });
        this.props.searchCoffee(e.target.value);
	}

    render() {
        return (
            <input 
                type="text" 
                className="grades-coffee__input"
                placeholder="start typing here..."
                onChange={this.searchCoffee}
                value={this.search} />
        )
    }
}

export default SearchPanel;