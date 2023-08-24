import React from 'react';
import CarouselBanner from '../CarouselBanner/CarouselBanner';
import MiniCardHome from '../MiniCardHome/MiniCardHome';
import AboutOne from '../AboutOne/AboutOne';
import FeatureOne from '../FeatureOne/FeatureOne';
import ServicesOne from '../ServicesOne/ServicesOne';
import CounterOne from '../CounterOne/CounterOne'
const Home = () => {
    return (
        <div>
           <CarouselBanner/>
           <MiniCardHome/>
           <AboutOne/>
           <FeatureOne/>
           <ServicesOne/>
           <CounterOne/>
        </div>
    );
};

export default Home;