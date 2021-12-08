
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.sass';
import ToggleMenu from './ToogleMenu/ToggleMenu';
import App from './components/app/App';
import OurCoffee from './routes/OurCoffee/ourCoffee';
import AboutIt from './AboutIt/AboutIt';
import './media-index.sass';





ReactDOM.render(
  <BrowserRouter>
	<Routes>
		<Route path="/" element={<App ToggleMenu={ToggleMenu}/>}/>
		<Route path="ourCoffee" element={<OurCoffee ToggleMenu={ToggleMenu}/>}/>
    <Route path="ourCoffee/about-it/*" element={<AboutIt ToggleMenu={ToggleMenu}/>}></Route>
  </Routes>
  </BrowserRouter>,
  document.querySelector('#root')
);


