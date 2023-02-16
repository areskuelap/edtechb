import { Routes, Route } from "react-router-dom";
import './App.css';
import ContactForm from "./components/contact";
import AboutUs from "./components/aboutus"; 
import HomePage from "./components/homepage";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/contact" element={<ContactForm/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
