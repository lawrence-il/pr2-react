import SearchPanel from "../SearchPanel/SearchPanel";
import FilterPanel from '../FilterPanel/FilterPanel';
import GradesCoffeeCards from '../GradesCoffeeCards/GradesCoffeeCards';

const GradesCoffee = ({searchCoffee, filterUpdateState, visibleCoffeeCard}) => (
    <section className="grades-coffee">
        <div className="container">
            <div className="grades-coffee__choose-panel">
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
                    <FilterPanel filterUpdateState={filterUpdateState}/>
                    <GradesCoffeeCards visibleCoffeeCard={visibleCoffeeCard}/>
                </div>
            </div>
        </div>	
    </section>
)

export default GradesCoffee;