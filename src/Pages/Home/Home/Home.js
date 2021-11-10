import React from 'react';
import Quality from '../Quality/Quality';
import Banner from '../Banner/Banner';
import './Home.css';
import Services from '../Services/Services/Services';
import Counter from '../Counter/Counter';
import Doctors from '../Doctors/Doctors';
import Contact from '../Contacts/Contact';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Quality></Quality>
            <Services></Services>
            <Doctors></Doctors>
            <Counter></Counter>
            <Contact></Contact>
        </div>
    );
};

export default Home;