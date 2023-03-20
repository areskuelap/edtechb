import Home from "./components/home/home";
import {Routes, Route} from 'react-router-dom';
import './App.css';
import React, {useEffect} from "react";
import Login from "./components/login/login";
import Signin from "./components/login/signin";
import Header from "./components/home/header";
import Pricing from "./components/pricing/pricing";
import Submit from "./components/submit/submit";
import Main from "./components/practice/main";
import ListeningEasy from "./components/practice/listening/listening_easy";
import ComprehensionEasy from "./components/practice/comprehension/comprehension_easy";
import FilloutEasy from "./components/practice/fillout/fillout_easy";
import LiteracyEasy from "./components/practice/literacy/literacy_easy";
import WritingEasy from "./components/practice/writing/writing_easy";
import Contact from "./components/contact/contact";


function App() {

  useEffect(() => {
    document.title = "EduX"
  }, []);  

  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/main" element={<Main/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/submit" element={<Submit/>}/>
      <Route path="/pricing" element={<Pricing/>}/>
      <Route path="/listeningeasy" element={<ListeningEasy/>}/>
      <Route path="/comprehensioneasy" element={<ComprehensionEasy/>}/>
      <Route path="/fillouteasy" element={<FilloutEasy/>}/>
      <Route path="/literacyeasy" element={<LiteracyEasy/>}/>
      <Route path="/writingeasy" element={<WritingEasy/>}/>
      <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;