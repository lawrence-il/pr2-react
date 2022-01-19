import { useState } from 'react';
import { useLocation} from 'react-router-dom';
import gradesCoffee from '../../../data';
import useArrowUp from '../../hooks/useArrowUp/useArrowUp';
import OurCoffeeLayout from '../OurCoffeeLayout/OurCoffeeLayout';
import ForYourPleasureLayout from '../ForYourPleasureLayout/ForYourPleasureLayout';

import './ProductsPage.sass';

const withLayout = Component => props => {

	const [gradesCof, setGradesCoffee] = useState(gradesCoffee);
	const [search, setSearch] = useState('');
	const [filter, setFilter] = useState('All');
	const [toggleState, setToggleState] = useState(0);

	const {pathname} = useLocation();
	const {pageUp, arrowUp} = useArrowUp();

	const showCoffee = (gradesCof, search) => {
		if(search.length === 0) {
			return gradesCof
		}
		
		return gradesCof.filter(item => item.name.indexOf(search) > -1)
	}

	const searchCoffee = (searchValue) => { // приходит значение из input
		setSearch(searchValue)	
	}

	const filterUpdateState = (filterValue) => { // значение фильтра
		setFilter(filter === filterValue ? 'All' : filterValue)
	}

	const filterCoffee = (data, filter) => {
		switch(filter) { 
			case 'Brazil':
				return data.filter(item => item.country === 'Brazil');
			case 'Kenya':
				return data.filter(item => item.country === 'Kenya');
			case 'Columbia':
				return data.filter(item => item.country === 'Columbia');
			default:
				return data;
		}
	}

	const toggleMenu = (e) => {
		setToggleState((toggleState) => props.ToggleMenu(e, toggleState))
	}


	const visibleCoffeeCard = filterCoffee(showCoffee(gradesCof, search), filter);

	return (
		<div className={pathname === '/ourCoffee/' ? "our-coffee-page" : "for-your-pleasure-page"} 
			onWheel={pageUp} 
			onClick={toggleMenu}
			>
			<Component 	{...props}
						toggleState={toggleState} 
						searchCoffee={searchCoffee} 
						filterUpdateState={filterUpdateState} 
						visibleCoffeeCard={visibleCoffeeCard}/>
			{arrowUp}
		</div>
	)
}

const OurCoffeeLayoutWithLayout = withLayout(OurCoffeeLayout);
const ForYourPleasureLayoutWithLayout = withLayout(ForYourPleasureLayout); 

export  {OurCoffeeLayoutWithLayout, ForYourPleasureLayoutWithLayout};