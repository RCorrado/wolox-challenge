import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import MainSection from '../components/Section/MainSection';
import MediaSection from '../components/Section/MediaSection';
import BenefitSection from '../components/Section/BenefitSection';

const Home = (props) => {
    //State
    const[isBlocked, setBlocked] = useState(false);

    //Handler
    const handleBlock = () => setBlocked(!isBlocked);

    //Effect al cambiar el valor del bloqueo
    useEffect(() => {
        let overflow_available = isBlocked ? 'hidden' : 'auto';
        document.getElementsByTagName('body')[0].style.overflowY = overflow_available;
    }, [isBlocked]);

    return(
        <div>
            <Header blockEvent={ e => handleBlock() }/>
            <MainSection />
            <MediaSection />
            <BenefitSection />
            <Footer />
        </div>
    );
};

export default Home;