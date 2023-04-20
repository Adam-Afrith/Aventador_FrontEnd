import React from 'react'
import logo from '../../assets/logos/trophy.png';


const Dashboard = () => {
  return (
    <div>
      <h1>AVENTADOR</h1>
         <h2>Dashboard Page</h2>
         <img src={logo} className="" alt="logo" width="300px" />
         <button className='btn btn-primary'>GO</button>
    </div>
  )
}

export default Dashboard