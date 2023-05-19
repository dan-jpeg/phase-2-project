
const PlaceholderInput = ( {newPlaceholderText, handleInputChange, addNewPlaceholder} ) => {
    
    return (
        <form onSubmit={addNewPlaceholder}>
        <input className="placeholder-input" type="text" value={newPlaceholderText} onChange={handleInputChange} ></input>
        </form>
    )

}

export default PlaceholderInput;