import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.sass';
import './sass/text-h2.sass';
import GradesCoffee from './components/GradesCoffee/GradesCoffee';
import ToggleMenu from './components/ToogleMenu/ToggleMenu';
import App from './components/app/App';
import OurCoffeeForYourPl from './components/OurCoffeeForYourPl/OurCoffeeForYourPl';
import AboutIt from './components/AboutIt/AboutIt';
import './media-index.sass';






ReactDOM.render(
  <BrowserRouter>
	<Routes>
		<Route path="/" element={<App ToggleMenu={ToggleMenu}/>}/>
		<Route path="ourCoffee" element={<OurCoffeeForYourPl
        render={
          (searchCoffee, filterUpdateState) => (
            <GradesCoffee 
              searchCoffee={searchCoffee}
              filterUpdateState={filterUpdateState}
              />
            )
          }
          ToggleMenu={ToggleMenu}/>}/>
    <Route path="ourCoffee/about-it/*" element={<AboutIt ToggleMenu={ToggleMenu}/>}></Route>
    <Route path="ForYourPleasure" element={<OurCoffeeForYourPl render={() => {}} ToggleMenu={ToggleMenu}/> }></Route>
  </Routes>
  </BrowserRouter>,
  document.querySelector('#root')
);


