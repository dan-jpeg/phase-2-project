import React from "react";



const SideNav = ({ handleFontClick }) => {
    
    return (
                    <div className="topNav">  
            <img className="logo"  src={require('./photo/logo2.png')} alt="logo" />
            <nav><ul>
                <li onClick={handleFontClick}  key={"adieu"}> Adieu </li>
                <li onClick={handleFontClick}  key={"agentur"}> Agentur </li>
                <li onClick={handleFontClick}  key={"alti"}>Alti</li>
                <li onClick={handleFontClick}  key={"byrd"}> Byrd </li>
                <li onClick={handleFontClick}  key={"chapter"}> Chapter </li>
                <li onClick={handleFontClick}  key={"ekstra"}>Ekstra </li>
                <li onClick={handleFontClick}  key={"faxi"}>Faxi</li>
                <li onClick={handleFontClick}  key={"Figue"}>Figue</li>
                <li onClick={handleFontClick}  key={"good-mono"}>Good mono</li>
                <li onClick={handleFontClick}  key={"good-sans"}>Good sans</li>
                <li onClick={handleFontClick}  key={"kosmos"}>Kosmos</li>
                <li onClick={handleFontClick}  key={"kubik"}>Kubik</li>
                <li onClick={handleFontClick}  key={"okkult"}>Occult</li>
                <li onClick={handleFontClick}  key={"opposit"}>Opposit</li>
                <li onClick={handleFontClick}  key={"plakat"}>PlakatGrotesk</li>
                <li onClick={handleFontClick}  key={"plakat-bold"}>PlakatGrotesk Bold</li>
                <li onClick={handleFontClick}  key={"tekno"}>Tekno</li>
                <li onClick={handleFontClick}  key={"riposte"}>Riposte</li>
                <li onClick={handleFontClick}  key={"riposte-bold"}>Riposte Bold</li>
                <li onClick={handleFontClick}  key={"rouleur"}>Rouleur</li>
                
              
            </ul></nav></div>
    )
}


export default SideNav;