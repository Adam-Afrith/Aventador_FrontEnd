import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import CompanyCreation from "./Components/CompanyCreation/CompanyCreation";
import CompanyList from "./Components/CompanyCreation/CompanyList";
import BikeCreation from "./Components/BikeCreation/BikeCreation";
import BikeList from "./Components/BikeCreation/BikeList";
import OwnerList from "./Components/OwnerCreation/OwnerList";
import OwnerCreation from "./Components/OwnerCreation/OwnerCreation";
import Sidebar from "./Components/Sidebar/Sidebar";
import Menus from "./Components/Sidebar/Menus";
import Design from "./Components/Design/Design";
import Page404 from "./Components/Page404";

function Routed() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="CompanyCreation" element={<CompanyCreation />} />
      <Route path="CompanyList" element={<CompanyList />} />
      <Route path="BikeCreation" element={<BikeCreation />} />
      <Route path="BikeList" element={<BikeList />} />
      <Route path="OwnerCreation" element={<OwnerCreation />} />
      <Route path="OwnerList" element={<OwnerList />} />
      <Route path="Sidebar" element={<Sidebar />} />
      <Route path="Menus" element={<Menus />} />
      <Route path="Design" element={<Design />} />
      <Route path="Page404" element={<Page404 />} />
    </Routes>
  );
}

export default Routed;
