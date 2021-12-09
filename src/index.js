import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.sass';
import './sass/text-h2.sass';
import ToggleMenu from './components/ToogleMenu/ToggleMenu';
import App from './components/app/App';
import OurCoffee from './components/OurCoffee/ourCoffee';
import AboutIt from './components/AboutIt/AboutIt';
import ForYourPleasure from './components/ForYourPleasure/ForYourPleasure';
import './media-index.sass';






ReactDOM.render(
  <BrowserRouter>
	<Routes>
		<Route path="/" element={<App ToggleMenu={ToggleMenu}/>}/>
		<Route path="ourCoffee" element={<OurCoffee ToggleMenu={ToggleMenu}/>}/>
    <Route path="ourCoffee/about-it/*" element={<AboutIt ToggleMenu={ToggleMenu}/>}></Route>
    <Route path="ForYourPleasure" element={<ForYourPleasure ToggleMenu={ToggleMenu}/> }></Route>
  </Routes>
  </BrowserRouter>,
  document.querySelector('#root')
);


