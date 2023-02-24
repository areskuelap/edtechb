import React from 'react';
import Head from "next/head";
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
import Widget from './Widget';
import Info from './Info';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

const Home = (props) => {

  return (   
    <div className=''>
    <Head>
    <title>Amazonas travel</title>
    <link rel="icon" href="../../assets/logo.png" />
    </Head>
        <Destinations/>
        <Hero/>
        <Banners/>
        <Carousel/>
        <Area/>
        <Info/>
        <Selects/>
        <Search/>
        <Widget/>
        <WhatsAppWidget CompanyIcon={CompanyIcon} phoneNumber="51913454892" />
        <Footer/>
    </div>
  );
};

export default Home;