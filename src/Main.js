
import { useState, useEffect } from "react";
import React from "react";
import FontSelector from "./FontSelector";
import TextInput from "./TextInput";
import FontDisplay from "./FontDisplay";
import SideNav from "./SideNav";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShoppingCart from "./ShoppingCart";
import { NavLink } from 'react-router-dom';



function Main () {

    


    const [placeholders, setPlaceholders] = useState([])
    const [font, setFont] = useState('Good mono');
    const [fontSize, setFontSize] = useState(52);
    const [fontColor, setFontColor] = useState('#FFFFFF');
    const [textAlign, setTextAlign] = useState('right');
    const [fontInput, setFontInput] = useState('... it was the spring of hope, it was the winter of despair.')
    const [backgroundColor, setBackgroundColor] = useState('#000000');
    const [cartContents, setCartContents] = useState([])
    const [placeholders2, setPlaceholders2] = useState([])
    const [usePlaceholders2, setUsePlaceholders2] = useState(false);

    
useEffect(() => { 
    fetch("http://localhost:4004/data")
    .then(response => response.json())
    .then(data => {
        setPlaceholders(data.opening_lines)
        setPlaceholders2(data.assorted_notes)
    })
},[])

    const handleChange = (e) => {
        setFontInput(e.target.value)
    }


  
    
    const handleReset = () => {
        setFontInput('')
    }

    const handleMouseLeave = () => {
        let newPlaceHolder;
        if (usePlaceholders2) {
          newPlaceHolder = getRandomString(placeholders2);
        } else {
          newPlaceHolder = getRandomString(placeholders);
        }
        setFontInput(newPlaceHolder);
        setUsePlaceholders2(prev => !prev);
      };

      
   const handleFontClick = (event) => {
    setFont(event.target.innerText)
    setFontInput(event.target.innertext)

   }

   const handleFontChange = (event) => {
    setFont(event.target.value);
    setFontInput(event.target.value)
    console.log(fontInput)
    console.log(event.target.value)
    
  }

  const handleBackgroundChange = (event) => {
    const checked = event.target.checked;
    if (checked) {
      setBackgroundColor('#000000');
      setFontColor('#FFFFFF');
    } else {
      setBackgroundColor('#FFFFFF');
      setFontColor('#000000');
    }
  };

   function getRandomString(strings) {
        let randomIndex = Math.floor(Math.random() * strings.length);
        console.log(randomIndex)
  
        return strings[randomIndex];
}
const addToCart = () => {
   const cartItem = { name: font,
                        price: 66 }
        setCartContents([...cartContents, cartItem])
        console.log(cartContents) 
}

    return (
    <div className="main">
       
       <SideNav handleFontClick={handleFontClick} />
    <TextInput
        fontSize={fontSize}
        setFontSize={setFontSize}
        fontColor={fontColor}
        setFontColor={setFontColor}
        textAlign={textAlign}
        setTextAlign={setTextAlign}
        handleBackgroundChange={handleBackgroundChange}
        backgroundColor={backgroundColor}
      />


    

   <FontDisplay 
        font={font} fontSize={fontSize} fontColor={fontColor}
        textAlign={textAlign}  fontInput={fontInput} handleReset={handleReset} handleChange={handleChange} 
        backgroundColor={backgroundColor}
        handleMouseLeave={handleMouseLeave}
         />
    <div className="div5">
   <p>dan crowley 2023</p>
        </div>
        <div className="div6">
        
        <span onClick={addToCart} className="cart-button">add to cart</span>
        <br /> 
        <NavLink className="cart-link" to="/cart">view cart</NavLink>
        </div>




         </div>
        

    )
}

export default Main;