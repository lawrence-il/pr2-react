import { Fragment } from "react";

const FilterPanel = ({filterUpdateState}) => {
    const filters = ['Brazil', 'Kenya', 'Columbia']
    return filters.map((item, i) => (
        <Fragment key={i}>
            <button 
                className="grades-coffee__btns" 
                onClick={() => filterUpdateState(item)}>{item}</button>
        </Fragment>
    ))
}

export default FilterPanel;