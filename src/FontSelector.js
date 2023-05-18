const FontSelector = ({ font, handleFontChange }) => {
   

    
  
    return (
      <div className="font-selector">
        <label htmlFor="font-select">Font:</label>
        <select id="font-select" value={font} onChange={handleFontChange}>
          <option value="Arial">Arial</option>
          <option value="Helvetica">Helvetica</option>
          <option value="Times New Roman">Times New Roman</option>
          {/* Add more font options as needed */}
        </select>
      </div>
    );
  };
  
  export default FontSelector;