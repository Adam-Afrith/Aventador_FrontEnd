import logo from "./logo.svg";
// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Routes, Route, Link } from "react-router-dom";
import Routed from "./Router";
import Sidebar from "./Components/Sidebar/Sidebar";
import Master from "./Master/Master";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";

function App() {
  return (
    <>
      <div>
        <Header />
        <Routed />
      </div>
      <div>{/* <Footer /> */}</div>
    </>
  );
}

export default App;
