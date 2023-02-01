import { color, style } from "@mui/system";
import React, { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {

  const [theme, setTheme] = useState('light-theme')
  const toogleTheme = () =>{
    if(theme === "dark-theme"){
      setTheme('light-theme')
    }else{
      setTheme('dark-theme')
    }
  }

  useEffect(()=>{
    document.body.className = theme
  },[theme])


  return (
    <header className="header">
      <div className="container">
        <div className="content">
          <h4>Where is the world?</h4>
          <div  onClick={()=>{
                toogleTheme()
                
               }} className="title">
               <img src="/src/assets/dark-mode.png" alt="" />
            <h5>Light Mode</h5>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
