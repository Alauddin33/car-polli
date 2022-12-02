import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Advertise from '../Advertise/Advertise';
import Carousel from '../Carousel/Carousel';
import Categories from '../Categories/Categories';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Carousel></Carousel>
            <Advertise></Advertise>
            <Categories></Categories>
        </div>
    );
};

export default Home;