import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Fragment } from 'react';
import pic1 from "../../assets/images/asus_pic.jpg";


function Header() {


  return (
    <>
    <nav className='bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <div className='flex items-center cursor-pointer'>
          <span className='self-center text-2xl font-bold whitespace-nowrap italic '>
              Aventador
          </span>
        </div>
        <div className='flex items-center gap-2'>
          <Fragment>
            <a href='/CompanyList'><button>Company</button></a>
            <a href='/Bikelist'><button>Bike</button></a>
            <a href='/OwnerList'><button>Owner</button></a>
            <a href='/FileList'><button>File</button></a>
          </Fragment>

        </div>
        <div className="flex md:order-2">
          <img src={pic1} className='self-center w-8 h-8 rounded-full mx-1' alt="" />
            <div>
              <strong>Adam</strong>
            </div>
      </div>
      </div>
    </nav>
    </>
  );
}

export default Header;