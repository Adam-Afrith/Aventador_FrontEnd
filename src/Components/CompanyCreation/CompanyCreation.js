import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';


const initialState = {
    company : "",
}

const initialStateErr = {
    companyErr : "",
}

const CompanyCreation = () => {

    const [input, setInput] = useState(initialState);
    const [inputValidation, setInputValidation] = useState(initialStateErr);

    const navigate = useNavigate();
    const cancelHandler = () => {
        navigate('/CompanyList')
      }

      const postData = (data) => {
        axios.post('http://localhost:8000/api/company', data)
        .then((resp)=> {
          if(resp.data.status === 200){
            Swal.fire({
                icon: "success",
                title: "Company",
                text:  resp.data.message,
                confirmButtonColor: "#5156ed",
              });
  
            navigate(`/CompanyList`);
          }
          else if(resp.data.status === 400){
            Swal.fire({
                icon: "error",
                title: "Company",
                text: resp.data.errors,
                confirmButtonColor: "#5156ed",
              });
          }
        })
      }
      const inputHandler = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });

        if (e.target.value === "") {
            setInputValidation({ ...inputValidation, [e.target.name]: true });
        } else {
            setInputValidation({ ...inputValidation, [e.target.name]: false });
        }
    }
     

      const submitHandler = (e) => {
    
        e.preventDefault();
        
        let data = {
            company_name : input.company,
            // activeStatus : input.activeStatus,
            // tokenId : localStorage.getItem("token")
        }
      // console.log('DATA',data)
       if(data){
        postData(data);
       }

        // if(!id){
        //     postData(data);
        // }else{
        //     putData(data, id);
        // }
    }


  return (
    <div>
    <h2 align='center'>Company Creation</h2>

    <form>
    <div className="container">
        <div className="row d-flex justify-content-center">
            <div className='col-6'>
                <div className='card card-primary p-4 border-0 shadow-lg'>
                    <div className='card-body'>
                        <h5>Company</h5>
                        <div class='mb-3'>
                        <input 
                            type="text"
                            className="form-control"
                            id="company"
                            name="company"
                            value={input.company}
                            onChange={inputHandler} />
                        </div>
                        <br/>
        <button className="btn btn-primary" onClick={submitHandler}>Submit</button>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <button className='btn btn-dark' onClick={cancelHandler}>Back</button>
                    </div>
                </div>
            </div>
        </div>
</div>
</form>
</div>

  )
}

export default CompanyCreation