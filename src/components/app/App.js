import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OurCoffeeLayout from '../pages/ourCoffeeLayout/OurCoffeeLayout';
import ForYourPlLayout from '../pages/forYourPlLayout/ForYourPlLayout';
import { AboutIt } from '../pages';
import ToggleMenu from '../toogleMenu/ToggleMenu';

const CoffeeHouse = lazy(() => import('../pages/CoffeeHouse'));
const ProductPage = lazy(() => import('../pages/productPage/ProductPage'))

const App = () => {
  

    return (
      <BrowserRouter>
        <Suspense fallback={<span style={{margin: '0 auto'}}>Loading...</span>}>
			<Routes>
				<Route path="/" element={<CoffeeHouse ToggleMenu={ToggleMenu}/>}/> 
				<Route path="ourCoffee" element={<ProductPage
					render={
						(toggleState, searchCoffee, filterUpdateState, visibleCoffeeCard) => (
							<OurCoffeeLayout
								toggleState={toggleState}
								searchCoffee={searchCoffee}
								filterUpdateState={filterUpdateState}
								visibleCoffeeCard = {visibleCoffeeCard}
							/>
						)
						}
						ToggleMenu={ToggleMenu}/>}/>
				<Route path="ourCoffee/about-it/:id" element={<AboutIt ToggleMenu={ToggleMenu}/>}></Route>
				<Route path="forYourPleasure" element={<ProductPage 
					render={
						(toggleState, searchCoffee, filterUpdateState, visibleCoffeeCard) => (
							<ForYourPlLayout
								toggleState={toggleState}
								searchCoffee={searchCoffee}
								filterUpdateState={filterUpdateState}
								visibleCoffeeCard = {visibleCoffeeCard}
							/>
						)

				} ToggleMenu={ToggleMenu}/>}></Route>
			</Routes>
		</Suspense>
      </BrowserRouter>
    );
  
}

export default App;
