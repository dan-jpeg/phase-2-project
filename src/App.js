
import './App.css';
import React, { useState } from 'react';
import Main from './Main';
import { Routes, Route } from 'react-router-dom';
import SplashNav from "./SplashNav";
import About from './About';
import ShoppingCart from './ShoppingCart';

const App = () => {

  const [dark, setDark] = useState(false)
 
  const toggleDark = () => {
    
    setDark(!dark) 
  }



  return (
    <div onMouseEnter={toggleDark} onMouseLeave={toggleDark} className={dark ? "App-dark" : "App"}>
      <header className={dark ? "App-header-dark" : "App-header"}>
       
        <p>
          <span className="type2">{dark ? "[ scroll down ]" : "[typetype]"}</span>
        </p>
        
         <h2>{dark ? "[  ]" : "[]"}</h2>
      </header> 
      <SplashNav dark={dark} />
      <Routes>
          <Route path="/products" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<ShoppingCart />} />
       </Routes>
    </div>
   
  );
}

export default App;
