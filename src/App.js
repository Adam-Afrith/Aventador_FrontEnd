import logo from "./logo.svg";
//import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
//import { Routes, Route, Link } from "react-router-dom";
import Routed from "./Router";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Sidebar from "./Components/Sidebar/Sidebar";
import Master from "./Master/Master";
// import Footer from "./Layouts/Footer";
import { createContext, useState } from "react";
import ReactSwitch from 'react-switch';
import { Routes, Route, Link, useLocation } from "react-router-dom";



export const ThemeContext = createContext(null);

function App() {

  const [theme,setTheme] = useState("dark");
  const toggleTheme = () =>{
    setTheme((curr) => (curr==="light" ? "dark" : "light"));
  };

  const location = useLocation();
  const excludeHeaderFooterPaths = ["/"]; // Add paths that should exclude the header and footer
  const shouldRenderHeaderFooter = !excludeHeaderFooterPaths.includes(location.pathname);
  

  return (
    <>
    <ThemeContext.Provider value={{theme,toggleTheme}}>

      <div id={theme}>
      <div className="switch">
        <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
        {shouldRenderHeaderFooter && <Header />}
        <Routed />
        </div>
        {shouldRenderHeaderFooter && <Footer />}
        
      </div>
     
      </ThemeContext.Provider>
      
    </>
  );
}

export default App;
