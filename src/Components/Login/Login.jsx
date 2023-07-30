import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "./Login.css";

const Login = () => {
  const initialState = {
    username: "",
    password: "",
  };

  const initialStateErr = {
    usernameErr: "",
    passwordErr: "",
  };
  const navigate = useNavigate();
  const [input, setInput] = useState(initialState);
  const [inputValidation, setInputValidation] = useState(initialStateErr);

  const postData = (data) => {
    axios.post("http://localhost:8000/api/custom-login", data).then((resp) => {
      if (resp.data.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Login",
          text: resp.data.message,
          confirmButtonColor: "#5156ed",
        });
        navigate(`/Dashboard`);
      } else if (resp.data.status === 400) {
        Swal.fire({
          icon: "error",
          title: "Login",
          text: resp.data.message,
          confirmButtonColor: "#5156ed",
        });
      }
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
      user_name: input.username,
      password: input.password,
    };
    // console.log('DATA',data)
    if (data) {
      postData(data);
    }
  };

  return (
    <>
      <div className="login-bg">
        <div
          className="card card-primary p-4 border-0 shadow-lg"
          style={{ backgroundColor: "transparent" }}
        >
          <div className="card-body">
            <h2>Aventador</h2>
          </div>
        </div>
        <br></br>
        <form>
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-5">
                <div
                  className="card card-primary p-4 border-0 shadow-lg"
                  style={{ backgroundColor: "transparent" }}
                >
                  <h2 align="center">USER LOGIN</h2>
                  <div className="card-body">
                    <h5>Name</h5>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        value={input.username}
                        onChange={inputHandler}
                      />
                    </div>
                    <br />
                    <h5>Password</h5>
                    <div className="mb-3">
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={input.password}
                        onChange={inputHandler}
                      />
                    </div>
                    <br />
                    <div className="d-grid gap-2">
                    <button className="btn btn-dark" onClick={submitHandler}>
                      Log in
                    </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
