import React from 'react';
import Banner from '../Banner/Banner';
import Foods from '../Foods/Foods/Foods';
import Header from '../Header/Header';
import Whyus from '../Whyus/Whyus';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Foods></Foods>
            <Whyus></Whyus>

        </div>
    );
};

export default Home;