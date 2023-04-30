import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../assets/logos/logo-A.png";
import square from "../../assets/logos/square.png";
import logout from "../../assets/logos/log-out.png";

// import "./Sidebar.css";

import GridViewIcon from "@mui/icons-material/GridView";

const Sidebar = () => {
  const [isExpanded, setExpendState] = useState(false);
  const menuItems = [
    {
      title: "Dashboard",
      icon: "icons/user.svg",
      path: "/",
    },
    {
      title: "Company",
      icon: square,
      path: "CompanyList",
    },
    {
      title: "Bike",
      icon: "icons/message.svg",
      path: "BikeList",
    },
    {
      title: "Owner",
      icon: "icons/pie-chart.svg",
      path: "OwnerList",
    },
  ];
  return (
    <div
      className={
        isExpanded
          ? "side-nav-container"
          : "side-nav-container side-nav-container-NX"
      }
    >
      <div className="nav-upper">
        <div className="nav-heading">
          {isExpanded && (
            <div className="nav-brand">
              <img src={logo} className="" alt="logo" width="100px" />
              <h3>Aventador</h3>
            </div>
          )}
          <button
            className={
              isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
            }
            onClick={() => setExpendState(!isExpanded)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="nav-menu">
          {menuItems.map((list) => (
            <>
              {/* <a
                className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
                href="#"
              > */}
              <Link to={list.path} className="d-flex">
                <img
                  className="menu-item-icon"
                  alt=""
                  src={list.icon}
                  width={20}
                  height={20}
                />
                {isExpanded && <p>{list.title}</p>}
              </Link>
              {/* </a> */}
            </>
          ))}
        </div>
      </div>
      <div className="nav-footer">
        {isExpanded && (
          <div className="nav-details">
            <img className="nav-footer-avatar" src={square} alt="" srcset="" />
            <div className="nav-footer-info">
              <p className="nav-footer-user-name">M Showkat</p>
              <p className="nav-footer-user-position">Admin</p>
            </div>
          </div>
        )}
        <img src={logout} className="" alt="logo" width="50px" />
        {/* <img className="logout-icon" src="icons/logout.svg" alt="" srcset="" /> */}
      </div>
    </div>
  );
};

export default Sidebar;
