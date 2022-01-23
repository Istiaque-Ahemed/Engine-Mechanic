import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Banner from './component/Banner/Banner';
import NavBer from './component/Navber/NavBer';
import HeaderExtra from './component/HaderExtra/HeaderExtra';
import CarRepair from './component/CarRepairDT/CarRepair';
import WhyChoosUs from './component/WhoChoosUs/WhyChoosUs';
import Footer from './component/Footer/Footer';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './component/Home/Home';
import ServiceDetalis from './component/ServiceDetalis/ServiceDetalis';

function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>

       <Route path="/" element={<Home/>} >

       </Route>
       <Route path="/footer" element={<Footer/>}></Route>
       <Route path="/service/:serviceId" element={[<NavBer/>,<ServiceDetalis/>,<Footer/>]} >
       </Route>

     </Routes>
     
     </BrowserRouter>
      
    </>
  );
}

export default App;
