import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import Routed from "./Router";
import Sidebar from "./Components/Sidebar/Sidebar";
import Master from "./Master/Master";

function App() {
  return (
    <>
      <div>
        <Routed />
      </div>
    </>
  );
}

export default App;
