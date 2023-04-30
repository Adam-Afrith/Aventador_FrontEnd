import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import Routed from "./Router";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="d-flex">
      <div>
        <Sidebar />
      </div>
      <div className="content-wrapper">
        <Routed />
      </div>
    </div>
  );
}

export default App;
