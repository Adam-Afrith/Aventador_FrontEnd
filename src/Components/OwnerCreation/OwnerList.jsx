import React from "react";
import axios, { Axios } from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import logo from "../../assets/logos/shield.png";
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
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import GridViewIcon from "@mui/icons-material/GridView";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const OwnerList = () => {
  const [owner, setOwner] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/owner").then((resp) => {
      setOwner(resp.data.owner);
      console.log("DATA:", resp);
    });
  }, []);

  const navigate = useNavigate();
  const Create = () => {
    navigate("/OwnerCreation");
  };

  return (
    <div>
      <h2>
        <img src={logo} className="" alt="logo" width="100px" />
        Owner
      </h2>
      <Fab color="primary" aria-label="add" onClick={Create}>
        <AddIcon />
      </Fab>
      <h3>Owner List</h3>
      <div className="card card-primary p-4 border-0 shadow-lg">
        <table className="table table-bordered">
          <thead className="table-primary">
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Company</th>
              <th scope="col">Bike</th>
              <th scope="col">Price</th>
              <th scope="col">Owner</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {owner.map((element, index) => (
              <tr key={index}>
                <td>{++index}</td>
                <td>{element.company_name}</td>
                <td>{element.bike_name}</td>
                <td>{element.price}</td>
                <td>{element.owner_name}</td>
                <td>
                  <Fab color="secondary" size="small" aria-label="edit">
                    <EditIcon />
                  </Fab>
                  <IconButton aria-label="edit">
                    <EditIcon />
                  </IconButton>
                  <IconButton aria-label="delete">
                    <DeleteIcon />
                  </IconButton>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OwnerList;
