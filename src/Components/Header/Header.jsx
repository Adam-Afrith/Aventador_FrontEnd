import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="card card-primary p-12 border-0 shadow-lg" style={{ backgroundColor: '#f0f0f0', padding: '12px 20px' }}>
   <ul className="Header-List" style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ margin: '0 5px' }}>
          <Link to="/CompanyList" style={{ listStyleType: 'none',textDecoration: 'none', color: '#333' }}>Company</Link>
        </li>
        <li style={{ margin: '0 5px' }}>
          <Link to="/BikeList" style={{ textDecoration: 'none', color: '#333' }}>Bike</Link>
        </li>
        <li style={{ margin: '0 5px' }}>
          <Link to="/OwnerList" style={{ textDecoration: 'none', color: '#333' }}>Owner</Link>
        </li>
        <li style={{ margin: '0 5px' }}>
          <Link to="/FileList" style={{ textDecoration: 'none', color: '#333' }}>Files</Link>
        </li>
        <li style={{ margin: '0 5px' }}>
          <Link to="/AttendanceLog" style={{ textDecoration: 'none', color: '#333' }}>Attendance</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
