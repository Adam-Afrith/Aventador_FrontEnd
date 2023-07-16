import React from "react";
import { useState, useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios";
import Select from "react-select";
import Swal from "sweetalert2";

const initialState = {
  company: null,
  bike: "",
};

const initialStateErr = {
  companyErr: "",
  bikeErr: "",
};

const BikeCreation = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const cancelHandler = () => {
    navigate("/BikeList");
  };

  const [input, setInput] = useState(initialState);
  const [companyList, setCompanyList] = useState([]);
  const [inputValidation, setInputValidation] = useState(initialStateErr);

  useEffect(() => {
    axios.get("http://localhost:8000/api/companylist").then((resp) => {
      setCompanyList(resp.data.companylist);
      //console.log('DATA:',resp)
    });
  }, []);

  useEffect(() => {
    if (id) {
      console.log('ID--',id)
      axios.get(`http://localhost:8000/api/bike/${id}`).then((resp) => {
        setInput((prevInput) => ({
          ...prevInput,
          company: companyList.find((x)=>x.value == resp.data?.bike[0]?.cid),
          bike: resp?.data?.bike[0]?.bike_name,
        }));
      });
    }
  }, [id,companyList]);



  const Options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const postData = (data) => {
    axios.post("http://localhost:8000/api/bike", data).then((resp) => {
      if (resp.data.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Bike",
          text: resp.data.message,
          confirmButtonColor: "#5156ed",
        });

        navigate(`/BikeList`);
      } else if (resp.data.status === 400) {
        Swal.fire({
          icon: "error",
          title: "Bike",
          text: resp.data.errors,
          confirmButtonColor: "#5156ed",
        });
      }
    });
  };

  const putData = (data, id) => {
    axios
      .put(`http://localhost:8000/api/bike/${id}`, data)
      .then((res) => {
        if (res.data.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Bike",
            text: "Updated Successfully!",
            confirmButtonColor: "#5156ed",
          });
          setInput(initialState);
          navigate(`/BikeList`);
        } else if (res.data.status === 400) {
          Swal.fire({
            icon: "error",
            title: "Bike",
            text: res.data.errors,
            confirmButtonColor: "#5156ed",
          });
        }
      })
      .catch((err) => {
        console.log("err", err.response.data.message);
        Swal.fire({
          icon: "error",
          title: "Bike",
          text: err.response.data.message || err,
          confirmButtonColor: "#5156ed",
        });
      });
  };

  const inputHandlerForSelect = (selectedOption) => {
    if (selectedOption) {
      setInput((prev) => {
        return { ...prev, company: selectedOption };
      });
      setInputValidation((prev) => {
        return { ...prev, companyErr: false };
      });
    } else {
      setInput((prev) => {
        return { ...prev, company: null };
      });
      setInputValidation((prev) => {
        return { ...prev, companyErr: true };
      });
    }
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
      company_id: input.company.value,
      bike_name: input.bike,
      // activeStatus : input.activeStatus,
      // tokenId : localStorage.getItem("token")
    };
    // console.log('DATA',data)
    if (!id) {
      postData(data);
    } else {
      putData(data, id);
    }
  };
  console.log("input", input);
  return (
    <div>
      <h2>Bike Creation<i className="fa-solid fa-gear fa-spin"></i></h2>
      <form>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-6">
              <div className="card card-primary p-4 border-0 shadow-lg">
                <div className="card-body">
                  <h5>Company</h5>
                  <div className="mb-3">
                    <Select
                      options={companyList}
                      name="company"
                      id="company"
                      isClearable="true"
                      isSearchable="true"
                      onChange={(e) => {
                        inputHandlerForSelect(e);
                      }}
                      value={input.company}
                    />
                     {inputValidation.companyErr && (
                                            <div className="pt-1">
                                                <span className="text-danger font-weight-bold">
                                                    Enter Company
                                                </span>
                                            </div>
                                        )}
                  </div>
                 
                  <h5>Bike</h5>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="bike"
                      name="bike"
                      value={input.bike}
                      onChange={inputHandler}
                    />
                    {inputValidation.bike && (
                      <div className="pt-1">
                        <span className="text-danger font-weight-bold">
                          Enter Bike Name
                        </span>
                      </div>
                    )}
                  </div>

                  <br />
                  <button className="btn btn-primary" onClick={submitHandler}>
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
    </div>
  );
};

export default BikeCreation;
