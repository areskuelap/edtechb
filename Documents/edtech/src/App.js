import Home from "./components/home/home";
import {Routes, Route} from 'react-router-dom';
import './App.css';
import React, {useEffect} from "react";
import Login from "./components/login/login";
import About from "./components/home/about/about";
import Signin from "./components/login/signin";
import Header from "./components/home/header";
import Footer from "./components/home/footer";
import Pricing from "./components/pricing/pricing";
import Submit from "./components/submit/submit";
import Main from "./components/practice/main";
import ListeningEasy from "./components/practice/listening/listening_easy";
import ListeningMedium from "./components/practice/listening/listening_medium";
import ListeningHard from "./components/practice/listening/listening_hard";
import ComprehensionEasy from "./components/practice/comprehension/comprehension_easy";
import ComprehensionMedium from "./components/practice/comprehension/comprehension_medium";
import ComprehensionHard from "./components/practice/comprehension/comprehension_hard";
import FilloutEasy from "./components/practice/fillout/fillout_easy";
import FilloutMedium from "./components/practice/fillout/fillout_medium";
import FilloutHard from "./components/practice/fillout/fillout_hard";
import LiteracyEasy from "./components/practice/literacy/literacy_easy";
import LiteracyMedium from "./components/practice/literacy/literacy_medium";
import LiteracyHard from "./components/practice/literacy/literacy_hard";
import WritingEasy from "./components/practice/writing/writing_easy";
import WritingMedium from "./components/practice/writing/writing_medium";
import WritingHard from "./components/practice/writing/writing_hard";
import Contact from "./components/contact/contact";
import Scholarship from "./components/contact/scholarship";
import Lectures from "./components/lectures/lectures";

function App() {

  useEffect(() => {
    document.title = "Learn the skills for the AI era - EduX"
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
      <Route path="/listeningmedium" element={<ListeningMedium/>}/>
      <Route path="/listeninghard" element={<ListeningHard/>}/>
      <Route path="/comprehensioneasy" element={<ComprehensionEasy/>}/>
      <Route path="/comprehensionmedium" element={<ComprehensionMedium/>}/>
      <Route path="/comprehensionhard" element={<ComprehensionHard/>}/>
      <Route path="/fillouteasy" element={<FilloutEasy/>}/>
      <Route path="/filloutmedium" element={<FilloutMedium/>}/>
      <Route path="/fillouthard" element={<FilloutHard/>}/>
      <Route path="/literacyeasy" element={<LiteracyEasy/>}/>
      <Route path="/literacymedium" element={<LiteracyMedium/>}/>
      <Route path="/literacyhard" element={<LiteracyHard/>}/>
      <Route path="/writingeasy" element={<WritingEasy/>}/>
      <Route path="/writingmedium" element={<WritingMedium/>}/>
      <Route path="/writinghard" element={<WritingHard/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/scholarship" element={<Scholarship/>}/>
      <Route path="/lectures" element={<Lectures/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;