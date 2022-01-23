import React from 'react';
import Banner from '../Banner/Banner';
import CarRepair from '../CarRepairDT/CarRepair';
import Footer from '../Footer/Footer';
import HeaderExtra from '../HaderExtra/HeaderExtra';
import NavBer from '../Navber/NavBer';
import Services from '../Services/Services';
import WhyChoosUs from '../WhoChoosUs/WhyChoosUs';

const Home = () => {
    return (
        <div>
            <NavBer></NavBer>
            <Banner></Banner>
            <HeaderExtra></HeaderExtra>
            <CarRepair></CarRepair>
            <WhyChoosUs></WhyChoosUs>
            <Services></Services>
            <Footer></Footer>
            

        </div>
    );
};

export default Home;