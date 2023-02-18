import Faq from "./components/subpages/plan/Faq";
import Getting from "./components/subpages/plan/Getting";
import Transportation from './components/subpages/plan/Transportation';
import Visa from "./components/travelbasics/Visa";
import Contact from "./components/Contact";
import Map from "./components/map/Map"
import {useEffect} from "react";
import Newsmain from "./components/news/Newsmain";
import Newsa from "./components/news/Newsa";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/home/Navbar";
import Home from "./components/home/Home";
import Luya from "./components/subpages/destinations/Luya";
import First from "./components/subpages/plan/First";
import Adventure from "./components/subpages/todo/Adventure";
import Shopping from "./components/subpages/articles/Shopping";


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
        <Route path='/faq' element={<Faq/>} />
        <Route path='/getting' element={<Getting/>} />
        <Route path='/transportation' element={<Transportation/>} />
        <Route path='/visa' element={<Visa/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/map' element={<Map/>} />
        <Route path='/newsmain' element={<Newsmain/>} />
        <Route path='/newsa' element={<Newsa/>} />
      </Routes>
      </div>
  );
}
export default App;