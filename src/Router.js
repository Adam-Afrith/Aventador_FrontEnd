import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import CompanyCreation from "./Components/CompanyCreation/CompanyCreation";
import CompanyList from "./Components/CompanyCreation/CompanyList";
import BikeCreation from "./Components/BikeCreation/BikeCreation";
import BikeList from "./Components/BikeCreation/BikeList";
import OwnerList from "./Components/OwnerCreation/OwnerList";
import OwnerCreation from "./Components/OwnerCreation/OwnerCreation";
import Design from "./Components/Design/Design";
import Page404 from "./Components/Page404";
import Login from "./Components/Login/Login";
import FileList from "./Components/Files/FileList";
import FileCreation from "./Components/Files/FileCreation";
import AttendanceLog from "./Components/AttendanceLog/AttendanceLog";
import UserCreation from "./Components/Users/UserCreation";


function Routed() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="Dashboard" element={<Dashboard />} />
      <Route path="CompanyCreation" element={<CompanyCreation />} />
      <Route path="CompanyCreation/:id" element={<CompanyCreation />} />
      <Route path="CompanyList" element={<CompanyList />} />
      <Route path="BikeCreation" element={<BikeCreation />} />
      <Route path="BikeCreation/:id" element={<BikeCreation />} />
      <Route path="BikeList" element={<BikeList />} />
      <Route path="OwnerCreation" element={<OwnerCreation />} />
      <Route path="OwnerCreation/:id" element={<OwnerCreation />} />
      <Route path="OwnerList" element={<OwnerList />} />
      <Route path="Design" element={<Design />} />
      <Route path="FileList" element={<FileList />} />
      <Route path="FileCreation" element={<FileCreation />} />
      <Route path="AttendanceLog" element={<AttendanceLog />} />
      <Route path="UserCreation" element={<UserCreation />} />
      <Route path="*" element={<Page404 />} />
      
    </Routes>
  );
}

export default Routed;
