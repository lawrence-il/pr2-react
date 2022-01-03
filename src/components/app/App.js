import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AboutIt, CoffeeHouse, OurCoffeeForYourPl } from '../page';
import GradesCoffee from '../GradesCoffee/GradesCoffee';
import ToggleMenu from '../ToogleMenu/ToggleMenu';



const App = () => {
  

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
          <Route path="ForYourPleasure" element={<OurCoffeeForYourPl render={() => null} ToggleMenu={ToggleMenu}/> }></Route>
        </Routes>
      </BrowserRouter>
    );
  
}

export default App;
