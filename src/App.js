import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes,Route,Link } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import CompanyCreation from './Components/CompanyCreation/CompanyCreation';
import CompanyList from './Components/CompanyCreation/CompanyList';
import BikeCreation from './Components/BikeCreation/BikeCreation';
import BikeList from './Components/BikeCreation/BikeList';
import OwnerList from './Components/OwnerCreation/OwnerList';
import OwnerCreation from './Components/OwnerCreation/OwnerCreation';
import Sidebar from './Components/Sidebar/Sidebar';
import Menus from './Components/Sidebar/Menus';
import Design from './Components/Design/Design';



function App() {
  return (
    <div>

      <nav className='navbar navbar-expand navbar-dark bg-dark'>
        <div className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link to={'CompanyList'} className='nav-link'>Company</Link>
          </li>
          <li className='nav-item'>
            <Link to={'BikeList'} className='nav-link'>Bike</Link>
          </li>
          <li className='nav-item'>
            <Link to={'OwnerList'} className='nav-link'>Owner</Link>
          </li>
          <li className='nav-item'>
            <Link to={'Sidebar'} className='nav-link'>Sidebar</Link>
          </li>
          <li className='nav-item'>
            <Link to={'Menus'} className='nav-link'>Menus</Link>
          </li>
          <li className='nav-item'>
            <Link to={'Design'} className='nav-link'>Design</Link>
          </li>
        </div>
      </nav>
      
        <div className="container">
          <Routes>
            <Route path='/' element={<Dashboard/>}/>  
            <Route path='CompanyCreation' element={<CompanyCreation/>}/>
            <Route path='CompanyList' element={<CompanyList/>}/>
            <Route path='BikeCreation' element={<BikeCreation/>}/>
            <Route path='BikeList' element={<BikeList/>}/>
            <Route path='OwnerCreation' element={<OwnerCreation/>}/>
            <Route path='OwnerList' element={<OwnerList/>}/>
            <Route path='Sidebar' element={<Sidebar/>}/>
            <Route path='Menus' element={<Menus/>}/>
            <Route path='Design' element={<Design/>}/>
          </Routes>
        </div>
    </div>
  );
}

export default App;
