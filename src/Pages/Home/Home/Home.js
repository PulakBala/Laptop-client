import React from 'react';
import CarouselBanner from '../CarouselBanner/CarouselBanner';
import MiniCardHome from '../MiniCardHome/MiniCardHome';
import AboutOne from '../AboutOne/AboutOne';
import FeatureOne from '../FeatureOne/FeatureOne';
import ServicesOne from '../ServicesOne/ServicesOne';
import CounterOne from '../CounterOne/CounterOne'
import TeamOne from '../TeamOne/TeamOne';
import Testmonial from '../Testmonial/Testmonial';
import OwlCarousel from '../OwlCarousel/OwlCarousel';
import EventItem from '../EventItem/EventItem';
import LatestNewsOne from '../LatestNewsOne/LatestNewsOne';

const Home = () => {

    return (
        <div>
           <CarouselBanner/>
           <MiniCardHome/>
           <AboutOne/>
           <FeatureOne/>
           <ServicesOne/>
           <CounterOne/>
           <TeamOne/>
           <Testmonial />
           <OwlCarousel/>
           <EventItem/>
           <LatestNewsOne/>
        </div>
    );
};

export default Home;