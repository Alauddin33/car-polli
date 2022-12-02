import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Carousel from '../Carousel/Carousel';
import Categories from '../Categories/Categories';
import Step from '../Step/Step';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Carousel></Carousel>
            <Categories></Categories>
            <Step></Step>
        </div>
    );
};

export default Home;