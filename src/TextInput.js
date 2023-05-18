import React, { useState } from 'react';

const TextInput = ({
  fontSize, setFontSize, fontColor, setFontColor, textAlign, setTextAlign, handleBackgroundChange, backgroundColor
}) => {


  const handleFontSizeChange = (event) => {
    setFontSize(parseInt(event.target.value, 10));
  };

  const handleFontColorChange = (event) => {
    setFontColor(event.target.value);
  };

  const handleTextAlignChange = (event) => {
    setTextAlign(event.target.value);
  };

  
  
  return (
    <div className="div2" >
      <label htmlFor="font-size-input"></label>
      <input
        id="font-size-input"
        type="range"
        min="38"
        max="150"
        value={fontSize}
        onChange={handleFontSizeChange}
      />
<br />
<br />
      <label htmlFor="font-color-input"></label>
      <input
        id="font-color-input"
        type="color"
        value={fontColor}
        onChange={handleFontColorChange}
      />

<br />
<br />

      <label htmlFor="text-align-select"></label>
      <select
        id="text-align-select"
        value={textAlign}
        onChange={handleTextAlignChange}
      >
        <option value="left">L</option>
        <option value="center">C</option>
        <option value="right">R</option>
      </select>

      <br />
      <br />

      <label htmlFor="background-switch"></label>
      <input
        id="background-switch"
        type="checkbox"
        onChange={handleBackgroundChange}
      />
    </div>
  );
};

export default TextInput;
