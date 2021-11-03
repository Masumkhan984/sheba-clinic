import React from 'react';
import Quality from '../Quality/Quality';
import Banner from '../Banner/Banner';
import './Home.css';
import Services from '../Services/Services/Services';
import Counter from '../Counter/Counter';
import Patients from '../Patients/Patients';
import Contact from '../Contacts/Contact';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Quality></Quality>
            <Services></Services>
            <Counter></Counter>
            <Patients></Patients>
            <Contact></Contact>
        </div>
    );
};

export default Home;