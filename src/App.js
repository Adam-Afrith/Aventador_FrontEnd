import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes,Route,Link } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import CompanyCreation from './CompanyCreation/CompanyCreation';
import BikeCreation from './BikeCreation/BikeCreation';
import OwnerCreation from './OwnerCreation/OwnerCreation';


function App() {
  return (
    <div>
      <nav className='navbar navbar-expand navbar-dark bg-dark'>
        <div className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link to={'CompanyCreation'} className='nav-link'>Company</Link>
          </li>
          <li className='nav-item'>
            <Link to={'BikeCreation'} className='nav-link'>Bike</Link>
          </li>
          <li className='nav-item'>
            <Link to={'OwnerCreation'} className='nav-link'>Owner</Link>
          </li>
        </div>
      </nav>
      
        <div className="container">
          <Routes>
            <Route path='/' element={<Dashboard/>}/>  
            <Route path='CompanyCreation' element={<CompanyCreation/>}/>
            <Route path='BikeCreation' element={<BikeCreation/>}/>
            <Route path='OwnerCreation' element={<OwnerCreation/>}/>
          </Routes>
        </div>
    </div>
  );
}

export default App;
