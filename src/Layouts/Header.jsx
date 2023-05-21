import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/Dashboard">
        Aventador
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/CompanyList">
              Company
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/BikeList">
              Bike
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/OwnerList">
              Owner
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              More
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/AttendanceLog">
                Attendance Log
              </a>
              <a className="dropdown-item" href="/FileList">
                File
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
