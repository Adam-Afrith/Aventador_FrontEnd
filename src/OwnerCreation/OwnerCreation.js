import React from 'react';
import axios, { Axios } from 'axios';
import { useState,useEffect } from 'react';



const OwnerCreation = () => {

  const [owner,setOwner] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8000/api/owner')
    .then((resp)=> {
      setOwner(resp.data.owner);
      console.log('DATA:',resp)
    })
  },[]);


  return (
    <div>
       {/* <h2><img src={logo} className="" alt="logo" width="100px" />OwnerCreation</h2> 
       {/* <button onClick={getCompany} className='btn btn-primary'>GO</button>
       {input} */} 
 
     <h3>Owners</h3>
     <table class="table">
        <thead>
            <tr>
            <th scope="col">S.No</th>
            <th scope="col">Company</th>
            <th scope="col">Bike</th>
            <th scope="col">Owner</th>
            <th scope="col">Action</th>
          
            </tr>
        </thead>
        <tbody>
            {owner.map((element,index)=>(
              <tr key={index}>
                <td>{++index}</td>
                <td>{element.company_name}</td>
                <td>{element.bike_name}</td>
                <td>{element.owner_name}</td>
                <td>Action</td>
              </tr>  
            ))} 
        </tbody>
      </table>
    </div>
  )
}

export default OwnerCreation