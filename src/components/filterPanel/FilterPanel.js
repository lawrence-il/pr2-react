import { Fragment } from "react";

const FilterPanel = ({filterUpdateState, valueFilter}) => {

    const filters = ['Brazil', 'Kenya', 'Columbia']
    console.log(filters, valueFilter);
    return filters.map((item, i) => (
        <Fragment key={i}>
            <button 
                className={`grades-coffee__btn ${valueFilter === item ? "grades-coffee__btn_active" : ""}`} 
                onClick={() => filterUpdateState(item)}>{item}</button>
        </Fragment>
    ))
}

export default FilterPanel;