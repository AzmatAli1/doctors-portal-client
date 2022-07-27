import React from 'react';
import Banner from './Banner/Banner';
import Info from './Info';
import Services from './Services';
import HeroExceptions from './HeroExceptions';



const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <HeroExceptions></HeroExceptions>
        </div>
    );
};

export default Home;