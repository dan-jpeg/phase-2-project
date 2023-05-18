import React from "react";

const FontDisplay = ({
  fontInput,
  font,
  fontSize,
  fontColor,
  textAlign,
  handleReset,
  handleChange,
  backgroundColor,
  handleMouseLeave,
}) => {
  const style = {
    fontFamily: font,
    fontSize: `${fontSize}px`,
    color: fontColor,
    textAlign: textAlign,
    backgroundColor: backgroundColor,
    overflowWrap: "break-word", // Wrap text onto the next line when it overflows
    lineHeight: "100%",
  };

  return (
    <div className="div4">
      <div className="fontDisplay"></div>
      <textarea
        style={style}
        onMouseLeave={handleMouseLeave}
        value={fontInput}
        onClick={handleReset}
        onChange={handleChange}
        className="try-font"
      ></textarea>
    </div>
  );
};

export default FontDisplay;