import React from 'react';
import AboutSection from '../AboutSection/AboutSection';
import Advertised from '../Advertise/Advertised';
import Category from '../Category/Category';
import Hero from '../Hero/Hero';

const Home = () => {
    return (
        <div className='mt-12 max-w-[1200px] mx-auto'>
            <Hero></Hero>
            <Category></Category>
            <AboutSection></AboutSection>
            <Advertised></Advertised>
        </div>
    );
};

export default Home;