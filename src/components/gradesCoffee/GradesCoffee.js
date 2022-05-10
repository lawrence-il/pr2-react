import SearchPanel from "../searchPanel/SearchPanel";
import FilterPanel from '../filterPanel/FilterPanel';
import './grades-coffee.sass';

const GradesCoffee = ({searchCoffee, filterUpdateState, valueFilter}) => (
    <section className="grades-coffee">
        <div className="container">
            <div className="grades-coffee__choice-panel">
                <div className="grades-coffee__search">
                    <div className="grades-coffee__text">
                        Looking for
                    </div>
                    <SearchPanel searchCoffee={searchCoffee}/>
                </div>
                <div className="grades-coffee__filter">
                    <div className="grades-coffee__text">
                        Or filter
                    </div>
                    <FilterPanel filterUpdateState={filterUpdateState} valueFilter={valueFilter}/>
                </div>
            </div>

        </div>	
    </section>
)

export default GradesCoffee;