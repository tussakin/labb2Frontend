import React, { useState } from 'react';
import { HashRouter as BrowserRouter,  Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Resume from "./Pages/Resume";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import './mystyle.css';
import './App.css';
import { Helmet } from 'react-helmet';


export default function App() {

  const [backgroundColor] = useState('transparent');  


  const handleOddPartClick = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;  };
    

    let keyCPressed = false;
    let keyHPressed = false;
    let keyAPressed = false;
    let keyOPressed = false;
    let keySPressed = false;


    const handleKeyPress = (event) => {
      if (event.key === 'c') {
        keyCPressed=true; 
      }
       if (event.key === 'h'){
        keyHPressed=true;
      }
      if (event.key === 'a'){
        keyAPressed=true;
      }    
      if (event.key === 'o'){
        keyOPressed=true;
      }
      if (event.key === 's'){
        keySPressed=true;
      }
   
      if(keyCPressed === true && keyHPressed === true && keyAPressed === true && keyOPressed === true && keySPressed === true) 
      {
        alert('Waddup cool kids, you did it! Have a cookie.');
        keyCPressed = false;
        keyHPressed = false;
        keyAPressed = false;
        keyOPressed = false;
        keySPressed = false;


      }
    };

    document.addEventListener("keydown", handleKeyPress);


  return (
 
    <BrowserRouter>
 <Helmet>
        <link rel="icon" type="image/png" href="/public/tussilago.png" />
      </Helmet>
   
        <Header/>

      <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/contact" element={<Contact/>}/>


        </Routes>
      
        <Footer/>

      <div className="easterEggClicky" style={{ backgroundColor}} onClick={handleOddPartClick}>
            X
            </div>
    </BrowserRouter>
  );
}