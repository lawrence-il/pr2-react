import { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AboutIt, CoffeeHouse, OurCoffeeForYourPl } from '../page';
import GradesCoffee from '../GradesCoffee/GradesCoffee';
import ToggleMenu from '../ToogleMenu/ToggleMenu';



class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CoffeeHouse ToggleMenu={ToggleMenu}/>}/>
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
          <Route path="ourCoffee/about-it/:id" element={<AboutIt ToggleMenu={ToggleMenu}/>}></Route>
          <Route path="ForYourPleasure" element={<OurCoffeeForYourPl render={() => {}} ToggleMenu={ToggleMenu}/> }></Route>
        </Routes>
      </BrowserRouter>
    );
  }
  
}

export default App;
