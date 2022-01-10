import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Banner from './component/Banner/Banner';
import NavBer from './component/Navber/NavBer';
import HeaderExtra from './component/HaderExtra/HeaderExtra';
import CarRepair from './component/CarRepairDT/CarRepair';
import WhyChoosUs from './component/WhoChoosUs/WhyChoosUs';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBer></NavBer>
      <Banner></Banner>
      <HeaderExtra></HeaderExtra>
      <CarRepair></CarRepair>
      <WhyChoosUs></WhyChoosUs>
      <Footer></Footer>

      
    </div>
  );
}

export default App;
