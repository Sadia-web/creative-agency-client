import React from 'react';
import Header from '../Header/Header';
import OurClients from '../OurClients/OurClients';
import OurWorks from '../OurWorks/OurWorks';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import ContactForm from '../ContactForm/ContactForm';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <OurClients></OurClients>
            <Services></Services>
            <OurWorks></OurWorks>
            <Reviews></Reviews>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </div>
    );
};

export default Home;