import Courses from './courses';
import Testimonials from './testimonials';
import Footer from './footer';
import Carousel from './carousel';
import React from "react";

const Home = () => {
    return(
        <div className="min-h-screen bg-gray-100">
        <Courses />
        <Carousel/>
        <Testimonials />
        <Footer />
      </div>
    )
}

export default Home;