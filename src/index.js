
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.sass';
import App from './components/app/App';
import OurCoffee from './routes/OurCoffee/ourCoffee';


ReactDOM.render(
  <BrowserRouter>
	<Routes>
		<Route path="/" element={<App />}/>
		<Route path="ourCoffee" element={<OurCoffee />} />
    </Routes>
  </BrowserRouter>,
  document.querySelector('#root')
);


