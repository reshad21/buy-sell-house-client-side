import React from 'react';
import Advertised from '../Advertise/Advertised';
import Category from '../Category/Category';
import Hero from '../Hero/Hero';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Category></Category>
            <Advertised></Advertised>
        </div>
    );
};

export default Home;