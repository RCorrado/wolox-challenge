import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import MainSection from '../components/Section/MainSection';
import MediaSection from '../components/Section/MediaSection';
import BenefitSection from '../components/Section/BenefitSection';

const Home = (props) => {
    return(
        <div>
            <Header/>
            <MainSection />
            <MediaSection />
            <BenefitSection />
            <Footer />
        </div>
    );
};

export default Home;