import React from 'react';
import Banner from './Banner/Banner';
import Info from './Info';
import Services from './Services';
import HeroExceptions from './HeroExceptions';
import MakeAppointment from './MakeAppointment';
import Testimonials from './Testimonials';
import ContuctUs from './ContuctUs';
import Footer from '../Shared/Footer';



const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <HeroExceptions></HeroExceptions>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <ContuctUs></ContuctUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;