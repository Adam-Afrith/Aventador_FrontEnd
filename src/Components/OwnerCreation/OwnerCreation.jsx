import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Select from "react-select";
import Swal from "sweetalert2";

const initialState = {
  company: null,
  bike: null,
  price: "",
  owner: "",
};

const initialStateErr = {
  companyErr: "",
  bikeErr: "",
  priceErr: "",
  ownerErr: "",
};

const OwnerCreation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const cancelHandler = () => {
    navigate("/OwnerList");
  };

  const [input, setInput] = useState(initialState);
  const [companyList, setCompanyList] = useState([]);
  const [bikeList, setBikeList] = useState([]);
  const [inputValidation, setInputValidation] = useState(initialStateErr);
  const [savedData, setSavedData] = useState({});

  useEffect(() => {
    axios.get("http://localhost:8000/api/companylist").then((resp) => {
      setCompanyList(resp.data.companylist);
    });
  }, []);

  useEffect(() => {
    if (input.company?.value) {
      axios
        .get(`http://localhost:8000/api/bike/list/${input.company?.value}`)
        .then((resp) => {
          setBikeList(resp.data.bikelist);
          console.log("bikeLISt", resp);
        });
    }
  }, [input.company]);

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8000/api/owner/${id}`).then((resp) => {
        
        setInput((prevInput) => ({
          ...prevInput,
          company: companyList.find((x)=>x.value == resp.data?.owner[0]?.cid),
          bike: bikeList.find((x)=>x.value == resp.data?.owner[0]?.bid),
          price: resp?.data?.owner[0]?.price,
          owner: resp?.data?.owner[0]?.owner_name,
        }));
      });
    }
  }, [id,companyList,bikeList]);

  const postData = (data) => {
    axios.post("http://localhost:8000/api/owner", data).then((resp) => {
      if (resp.data.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Owner",
          text: resp.data.message,
          confirmButtonColor: "#5156ed",
        });

        navigate(`/OwnerList`);
      } else if (resp.data.status === 400) {
        Swal.fire({
          icon: "error",
          title: "Owner",
          text: resp.data.errors,
          confirmButtonColor: "#5156ed",
        });
      }
    });
  };

  const inputHandlerForSelect = (selectedOption, name) => {
    if (selectedOption) {
      setInput((prev) => {
        return { ...prev, [name]: selectedOption };
      });
      setInputValidation((prev) => {
        return { ...prev, [`${name}Err`]: false };
      });
    } else {
      setInput((prev) => {
        return { ...prev, [name]: null };
      });
      setInputValidation((prev) => {
        return { ...prev, [`${name}Err`]: true };
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

  const putData = (data, id) => {
    axios
      .put(`http://localhost:8000/api/owner/${id}`, data)
      .then((res) => {
        if (res.data.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Owner",
            text: "Updated Successfully!",
            confirmButtonColor: "#5156ed",
          });
          setInput(initialState);
          navigate(`/OwnerList`);
        } else if (res.data.status === 400) {
          Swal.fire({
            icon: "error",
            title: "Owner",
            text: res.data.errors,
            confirmButtonColor: "#5156ed",
          });
        }
      })
      .catch((err) => {
        console.log("err", err.response.data.message);
        Swal.fire({
          icon: "error",
          title: "Owner",
          text: err.response.data.message || err,
          confirmButtonColor: "#5156ed",
        });
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    let data = {
      company_id: input.company.value,
      bike_id: input.bike.value,
      price: input.price,
      owner_name: input.owner,
    };

    if (!id) {
      postData(data);
    } else {
      putData(data, id);
    }
  };

  return (
    <div>
      <h2>Owner Creation</h2>
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
                      onChange={(selectedOption) => {
                        inputHandlerForSelect(selectedOption, "company");
                      }}
                      value={input.company}
                    />
                    {inputValidation.companyErr && (
                                            <div className="pt-1">
                                                <span className="text-danger font-weight-bold">
                                                    Enter Company Name
                                                </span>
                                            </div>
                                        )}
                  </div>
                  <h5>Bike</h5>
                  <div className="mb-3">
                    <Select
                      options={bikeList}
                      name="bike"
                      id="bike"
                      isClearable="true"
                      isSearchable="true"
                      onChange={(selectedOption) => {
                        inputHandlerForSelect(selectedOption, "bike");
                      }}
                      value={input.bike}
                    />
                    {inputValidation.bikeErr && (
                                            <div className="pt-1">
                                                <span className="text-danger font-weight-bold">
                                                    Enter Bike Name
                                                </span>
                                            </div>
                                        )}
                  </div>
                  <h5>Price</h5>
                  <div className="mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="price"
                      name="price"
                      value={input.price}
                      onChange={inputHandler}
                    />
                    {inputValidation.price && (
                                            <div className="pt-1">
                                                <span className="text-danger font-weight-bold">
                                                    Enter Price
                                                </span>
                                            </div>
                                        )}
                  </div>

                  <h5>Owner</h5>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="owner"
                      name="owner"
                      value={input.owner}
                      onChange={inputHandler}
                    />
                    {inputValidation.owner && (
                                            <div className="pt-1">
                                                <span className="text-danger font-weight-bold">
                                                    Enter Owner Name
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

export default OwnerCreation;
