import { useState } from "react";

const SearchPanel = (props) => {


    const [search, setSearch] = useState(''),

    searchCoffee = (e) => {
        setSearch(e.target.value);
        props.searchCoffee(e.target.value);
	}


        return (
            <input 
                type="text" 
                className="grades-coffee__input"
                placeholder="start typing here..."
                onChange={searchCoffee}
                value={search} />
        )
    }

export default SearchPanel;