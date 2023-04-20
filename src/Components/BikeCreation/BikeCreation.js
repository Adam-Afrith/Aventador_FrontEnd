import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';


const BikeCreation = () => {

    const navigate = useNavigate();
    const cancelHandler = () => {
        navigate('/BikeList')
      }

    const Options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ];  

  return (
    <div>
    <h2>Bike Creation</h2>


<form>
    <div className="container">
        <div className="row d-flex justify-content-center">
            <div className='col-6'>
                <div className='card card-primary p-4 border-0 shadow-lg'>
                    <div className='card-body'>
                        <h5>Company</h5>
                        <div class='mb-3'>
                        <Select options={Options}
                            isClearable = 'true'
                            isSearchable = 'true'
                        /></div>
                    <h5>Bike</h5>
                    <div class='mb-3'>
                        <input 
                            type="text"
                            className="form-control"
                            id="company"
                            name="company"
                            />
                        </div>
                      
                        <br/>
        <button className="btn btn-primary" onClick={""}>Submit</button>
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

export default BikeCreation