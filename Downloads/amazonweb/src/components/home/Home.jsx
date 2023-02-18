import React from 'react';
import Carousel from './Carousel';
import {useEffect} from "react";
import Destinations from './Destinations';
import Footer from './Footer';
import Hero from './Hero';
import { ReactComponent as CompanyIcon } from '../assets/Whats.svg';
import Search from './Search';
import Selects from './Selects';
import Banners from './Banners';
import Area from './Area';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

const Home = (props) => {
  useEffect(() => {
    document.title = "Marca Amazonas"
  }, []);   
  return (   
    <div className=''>
        <Destinations/>
        <Hero/>
        <Banners/>
        <Carousel/>
        <Area/>
        <Selects/>
        <Search/>
        <WhatsAppWidget CompanyIcon={CompanyIcon} phoneNumber="51913454892" />
        <Footer/>
    </div>
  );
};

export default Home;