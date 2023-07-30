import logo from "./logo.svg";
//import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Routed from "./Router";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";


import { createContext, useState } from "react";
import ReactSwitch from 'react-switch';
import { Container } from "react-bootstrap";



function App() {

  const location = useLocation();
  const excludeHeaderFooterPaths = ["/"]; // Add paths that should exclude the header and footer
  const shouldRenderHeaderFooter = !excludeHeaderFooterPaths.includes(location.pathname);
  

return (
    <>

      {shouldRenderHeaderFooter && <Header />}
            <main className="card card-primary p-20 border-0 shadow-lg"> 
   
                        <Routed />
        
            </main>
      {shouldRenderHeaderFooter && <Footer />}
      
    </>
);
}

export default App;
