import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const initialState = {
  company: "",
};

const initialStateErr = {
  companyErr: "",
};

const CompanyCreation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const cancelHandler = () => {
    navigate("/CompanyList");
  };

  const [input, setInput] = useState(initialState);
  const [inputValidation, setInputValidation] = useState(initialStateErr);

  

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8000/api/company/${id}`).then((resp) => {
        setInput({
          company: resp?.data?.company[0]?.company_name
        });
      });
    }
  }, [id]);

  console.log('input',input)

  const postData = (data) => {
    axios.post("http://localhost:8000/api/company", data).then((resp) => {
      if (resp.data.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Company",
          text: resp.data.message,
          confirmButtonColor: "#5156ed",
        });

        navigate(`/CompanyList`);
      } else if (resp.data.status === 400) {
        Swal.fire({
          icon: "error",
          title: "Company",
          text: resp.data.errors,
          confirmButtonColor: "#5156ed",
        });
      }
    });
  };

  const putData = (data, id) => {
    axios
      .put(`http://localhost:8000/api/company/${id}`, data)
      .then((res) => {
        if (res.data.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Company",
            text: "Updated Successfully!",
            confirmButtonColor: "#5156ed",
          });
          setInput(initialState);
          navigate(`/CompanyList`);
        } else if (res.data.status === 400) {
          Swal.fire({
            icon: "error",
            title: "Company",
            text: res.data.errors,
            confirmButtonColor: "#5156ed",
          });
        }
      })
      .catch((err) => {
        console.log("err", err.response.data.message);
        Swal.fire({
          icon: "error",
          title: "Call Type",
          text: err.response.data.message || err,
          confirmButtonColor: "#5156ed",
        });
      });
  };

 

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
  };

  const submitHandler = (e) => {
    e.preventDefault();

    let data = {
      company_name: input.company,
    };

    if (!id) {
      postData(data);
    } else {
      putData(data, id);
    }
  };

  

  return (
    <>
      <div className="card card-primary p-12 border-0 shadow-lg">
        <div className="card-body">
          <h2>Company Creation</h2>
        </div>
      </div>
      <br />
      <form>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-10">
              <div className="card card-primary p-4 border-0 shadow-lg">
                <div className="card-body">
                  <h5>Company</h5>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="company"
                      name="company"
                      value={input.company}
                      onChange={inputHandler}
                    />
                    {inputValidation.company && (
                                            <div className="pt-1">
                                                <span className="text-danger font-weight-bold">
                                                    Enter Company
                                                </span>
                                            </div>
                                        )}
                  </div>
                  <br />
                  <button
                    className="btn btn-primary"
                    onClick={submitHandler}
                  >
                    {id ? "Update" : "Submit"}
                  </button>
                  <span>&nbsp;&nbsp;&nbsp;</span>
                  <button className="btn btn-dark" onClick={cancelHandler}>
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default CompanyCreation;
