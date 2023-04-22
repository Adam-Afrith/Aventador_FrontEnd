import React from 'react';
import axios, { Axios } from 'axios';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';



const OwnerList = () => {

  const [owner,setOwner] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8000/api/owner')
    .then((resp)=> {
      setOwner(resp.data.owner);
      console.log('DATA:',resp)
    })
  },[]);

  const navigate = useNavigate();
  const Create = () => {
    navigate('/OwnerCreation')
  }



  return (
    <div>
       <button onClick={Create} className='btn btn-primary'>Create</button>
      

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

export default OwnerList