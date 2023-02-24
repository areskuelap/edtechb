import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import './index.css';
import Art from './components/subpages/articles/Art';
import Consumer from './components/subpages/todo/Consumer';
import Cuisine from './components/subpages/articles/Cuisine';
import Festivals from './components/subpages/articles/Festivals';
import Luya from './components/subpages/destinations/Luya';
import Navbar from "./components/home/Navbar";
import First from "./components/subpages/plan/First";
import Adventure from "./components/subpages/todo/Adventure";
import Shopping from "./components/subpages/articles/Shopping";
import Faq from "./components/subpages/plan/Faq";
import Getting from "./components/subpages/plan/Getting";
import Transportation from './components/subpages/plan/Transportation';
import Visa from "./components/travelbasics/Visa";
import Contact from "./components/Contact";
import Map from "./components/map/Map";
import {useEffect} from "react";
import Newsmain from "./components/news/Newsmain";
import Newsa from "./components/news/Newsa";
import Vasquezpampa from "./components/places/Luya/Vasquezpampa";
import Covid from "./components/popular/Covid";


function App() {
  useEffect(() => {
    document.title = "Marca Amazonas"
  }, []);  
  return (
      <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/luya' element={<Luya/>} />
        <Route path='/first' element={<First/>} />
        <Route path='/shopping' element={<Shopping/>} />
        <Route path='/adventure' element={<Adventure/>} />
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/getting' element={<Getting/>}/>
        <Route path='/transportation' element={<Transportation/>}/>
        <Route path='/visa' element={<Visa/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/map' element={<Map/>} />
        <Route path='/newsmain' element={<Newsmain/>} />
        <Route path='/art' element={<Art/>} />
        <Route path='/cuisine' element={<Cuisine/>} />
        <Route path='/festival' element={<Festivals/>} />
        <Route path='/newsa' element={<Newsa/>} />
        <Route path='/consumer' element={<Consumer/>} />
        <Route path='/vasquezpampa' element={<Vasquezpampa/>} />
        <Route path='/covid' element={<Covid/>} />
      </Routes>
      </div>
  );
}
export default App;