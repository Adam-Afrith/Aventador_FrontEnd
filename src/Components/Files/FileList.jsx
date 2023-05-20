import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
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

const FileList = () => {
  const navigate = useNavigate();
  const Create = () => {
    navigate("/FileCreation");
  };

  return (
    <>
      <Fab color="primary" aria-label="add" onClick={Create}>
        <AddIcon />
      </Fab>
      <h3>File List</h3>
      <div className="card card-primary p-4 border-0 shadow-lg">
        <table className="table table-bordered">
          <thead className="table-primary">
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Vehicle</th>
              <th scope="col">File</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </>
  );
};

export default FileList;
