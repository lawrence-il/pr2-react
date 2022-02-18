import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AboutIt } from '../page';
import {OurCoffeeLayoutWithLayout, ForYourPlLayoutWithLayout} from '../page/productsPage/ProductsPage'
import ToggleMenu from '../toogleMenu/ToggleMenu';

const CoffeeHouse = lazy(() => import('../page/CoffeeHouse'));


const App = () => {
  

    return (
      <BrowserRouter>
        <Suspense fallback={<span style={{margin: '0 auto'}}>Loading...</span>}>
			<Routes>
				<Route path="/" element={<CoffeeHouse ToggleMenu={ToggleMenu}/>}/> 
				<Route path="ourCoffee" element={<OurCoffeeLayoutWithLayout ToggleMenu={ToggleMenu}/>}/>
				<Route path="ourCoffee/about-it/:id" element={<AboutIt ToggleMenu={ToggleMenu}/>}></Route>
				<Route path="ForYourPleasure" element={<ForYourPlLayoutWithLayout ToggleMenu={ToggleMenu}/>}></Route>
			</Routes>
		</Suspense>
      </BrowserRouter>
    );
  
}

export default App;
