import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Select from "react-select";
import Swal from "sweetalert2";

const initialState = {
  bike: null,
  description: "",
};

const initialStateErr = {
  bikeErr: "",
};

const FileCreation = () => {
  const navigate = useNavigate();
  const cancelHandler = () => {
    navigate("/FileList");
  };

  const [input, setInput] = useState(initialState);
  const [bikeList, setBikeList] = useState([]);
  const [inputValidation, setInputValidation] = useState(initialStateErr);

  useEffect(() => {
    axios.get("http://localhost:8000/api/bikelist").then((resp) => {
      setBikeList(resp.data.allbikelist);
      console.log("Allbikelist--", resp);
    });
  }, []);

  const postData = (data) => {
    axios.post("http://localhost:8000/api/file", data).then((resp) => {
      if (resp.data.status === 200) {
        Swal.fire({
          icon: "success",
          title: "File",
          text: resp.data.message,
          confirmButtonColor: "#5156ed",
        });

        // navigate(`/FileList`);
      } else if (resp.data.status === 400) {
        Swal.fire({
          icon: "error",
          title: "File",
          text: resp.data.errors,
          confirmButtonColor: "#5156ed",
        });
      }
    });
  };

  const postFileData = (fileData) => {
    axios.post("http://localhost:8000/api/fileupload", fileData).then((resp) => {
      if (resp.data.status === 200) {
        Swal.fire({
          icon: "success",
          title: "File",
          text: resp.data.message,
          confirmButtonColor: "#5156ed",
        });

        // navigate(`/FileList`);
      } else if (resp.data.status === 400) {
        Swal.fire({
          icon: "error",
          title: "File",
          text: resp.data.errors,
          confirmButtonColor: "#5156ed",
        });
      }
    });
  };

  const inputHandlerForSelect = (selectedOption) => {
    if (selectedOption) {
      setInput((prev) => {
        return { ...prev, bike: selectedOption };
      });
      //   setInputValidation((prev) => {
      //     return {...prev ,calltypeErr: false};
      //    })
    } else {
      setInput((prev) => {
        return { ...prev, bike: null };
      });
      //   setInputValidation((prev) => {
      //     return {...prev ,calltypeErr: true};
      //    })
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
      vehicle_name: input.bike.value,
      description: input.description,
      // activeStatus : input.activeStatus,
      // tokenId : localStorage.getItem("token")
    };
    // console.log('DATA',data)
    if (data) {
      postData(data);
    }
  };

  const fileSubmitHandler = (e) => {
    e.preventDefault();

    let fileData = {
      file: input.file,
    };

    if (fileData) {
      postFileData(fileData);
    }
  };

  console.log('input',input)
  return (
    <>
      <h3>File Creation</h3>
      <form>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-6">
              <div className="card card-primary p-4 border-0 shadow-lg">
                <div className="card-body">
                  <h5>Vehicle</h5>
                  <div className="mb-3">
                    <Select
                      options={bikeList}
                      name="bike"
                      id="bike"
                      isClearable="true"
                      isSearchable="true"
                      onChange={(e) => {
                        inputHandlerForSelect(e);
                      }}
                      value={input.bike}
                    />
                  </div>
                  <h5>Description</h5>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="description"
                      name="description"
                      value={input.description}
                      onChange={inputHandler}
                    />
                  </div>

                  <br />
                  <button className="btn btn-primary" onClick={submitHandler}>
                    Submit
                  </button>
                  <span>&nbsp;&nbsp;&nbsp;</span>
                  <button className="btn btn-dark" onClick={cancelHandler}>
                    Back
                  </button>
                </div>
                <div className="card-body">
                  <input type="file" />
                  <br />
                  <br />
                  <button
                    className="btn btn-primary"
                    onClick={fileSubmitHandler}
                  >
                    Upload
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

export default FileCreation;
