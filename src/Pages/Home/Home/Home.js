import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
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
            <Footer></Footer>

        </div>
    );
};

export default Home;