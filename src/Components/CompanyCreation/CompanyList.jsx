import React from 'react';
import axios, { Axios } from 'axios';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logos/letter-c.png';

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Tooltip,
  Fab,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';






const CompanyCreation = () => {

  const [company,setCompany] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8000/api/company')
    .then((resp)=> {
        setCompany(resp.data.company);   
       //console.log('DATA:',resp)
    })
  },[]);

  const navigate = useNavigate();
  const Create = () => {
    navigate('/CompanyCreation')
  }



  return (
    <div>
      
       <h2><img src={logo} className="" alt="logo" width="100px" />CompanyCreation</h2>
       <Fab color="primary" aria-label="add" onClick={Create}>
         <AddIcon />
      </Fab>  
 

     <h3>Companies</h3>
     <table className="table">
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
                <td>
                <Fab color="secondary" size="small" aria-label="edit">
  <EditIcon />
</Fab>
                <IconButton aria-label="edit">
                    <EditIcon /></IconButton> 
                  <IconButton aria-label="delete">
                    <DeleteIcon /></IconButton> </td>
              </tr>  
            ))} 
        </tbody>
      </table>
    </div>
  )
}
export default CompanyCreation
