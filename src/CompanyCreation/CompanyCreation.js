import React from 'react';
import axios, { Axios } from 'axios';
import { useState,useEffect } from 'react';
import logo from '../assets/logos/letter-c.png';



const CompanyCreation = () => {

  const [company,setCompany] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8000/api/company')
    .then((resp)=> {
        setCompany(resp.data.company);
       
       console.log('DATA:',resp)
    })
  },[]);


  return (
    <div>
       <h2><img src={logo} className="" alt="logo" width="100px" />CompanyCreation</h2> 
       {/* <button onClick={getCompany} className='btn btn-primary'>GO</button>
       {input} */}
 
     <h3>Companies</h3>
     <table class="table">
        <thead>
            <tr>
            <th scope="col">S.No</th>
            <th scope="col">Company</th>
            <th scope="col">Action</th>
          
            </tr>
        </thead>
        <tbody>
            {company.map((element,index)=>(
              <tr key={index}>
                <td>{++index}</td>
                <td>{element.company_name}</td>
                <td>Action</td>
              </tr>  
            ))} 
        </tbody>
      </table>
    </div>
  )
}
export default CompanyCreation