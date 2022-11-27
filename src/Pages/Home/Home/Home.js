import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Carousel from '../Carousel/Carousel';
import Categories from '../Categories/Categories';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Carousel></Carousel>
            <Categories></Categories>

        </div>
    );
};

export default Home;