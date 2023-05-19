
import { useState, useEffect } from "react";
import React from "react";
import TextInput from "./TextInput";
import FontDisplay from "./FontDisplay";
import SideNav from "./SideNav";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import PlaceholderInput from "./PlaceholderInput";



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
    const [newPlaceholderText, setNewPlaceholderText] = useState('add your verse to our poem here')
    
    
    useEffect(() => {
        fetch("http://localhost:4005/opening_lines")
          .then(response => response.json())
          .then(data => {
            const openingLinesStrings = data.map(line => line.string);
            setPlaceholders(openingLinesStrings)
          });
    
        fetch("http://localhost:4005/assorted_notes")
          .then(response => response.json())
          .then(data => {
            const notes = data.map(note => note.string);
            setPlaceholders2(notes)
          });
      }, []);


    
    const convert = (data) => {
        data.map(line => line.string)
    }

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

   const handleInputChange = (e) => {
    setNewPlaceholderText(e.target.value)
    console.log(newPlaceholderText)
   }

   const addNewPlaceholder = (e) => {
    e.preventDefault();

    const newInput = {string: newPlaceholderText}
    console.log(newInput)
        fetch(' http://localhost:4005/assorted_notes', {
                method: "POST", 
                headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json"
                },
                body: JSON.stringify(newInput)
              })
              .then(rsp => rsp.json())
              .then(nP => console.log(nP))

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
       <PlaceholderInput newPlaceholderText={newPlaceholderText} handleInputChange={handleInputChange} addNewPlaceholder={addNewPlaceholder} />

    

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