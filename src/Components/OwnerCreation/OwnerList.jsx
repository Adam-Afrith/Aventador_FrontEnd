import React, { useState, useEffect } from "react";
import axios from "axios";
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
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from "react-table";

const OwnerList = () => {

  const navigate = useNavigate();
  const Create = () => {
    navigate("/OwnerCreation");
  };

  const editOwner = (id) => {
    navigate(`/OwnerCreation/${id}`);
  };

  const [owner, setOwner] = useState([]);

  useEffect(() => {
    fetchOwnerData();
  }, []);

  const fetchOwnerData = () => {
    axios.get("http://localhost:8000/api/owner").then((resp) => {
      setOwner(resp.data.owner);
    });
  };

 
  const deleteHandler = (id) => {
    deleteData(id);
  };

  const deleteData = (id) => {
    
    Swal.fire({
      icon: "warning",
      title: "Delete Owner",
      text: "Are you sure you want to delete this Owner?",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:8000/api/owner/${id}`)
          .then((res) => {
            if (res.data.status === 200) {
              Swal.fire({
                icon: "success",
                title: "Owner",
                text: "Deleted Successfully!",
                confirmButtonColor: "#5156ed",
              });
              fetchOwnerData();
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
      }
    });
  };

  const data = React.useMemo(() => owner, [owner]);
  const columns = React.useMemo(
    () => [
      {
        Header: "S.No",
        accessor: (row, index) => index + 1,
        Cell: ({ cell }) => <div>{cell.value}</div>,
      },
      {
        Header: "Company",
        accessor: "company_name",
      },
      {
        Header: "Bike",
        accessor: "bike_name",
      },
      {
        Header: "Price",
        accessor: "price",
      },
      {
        Header: "Owner",
        accessor: "owner_name",
      },
      {
        Header: "Action",
        Cell: ({ row }) => (
          <div>
            <Tooltip title="Edit">
              <IconButton
                aria-label="edit"
                onClick={() => editOwner(row.original.oid)}
              >
                {/* bid is the ownerid in backend */}
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton
                aria-label="delete"
                onClick={() => deleteHandler(row.original.oid)}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </div>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setGlobalFilter,
    state: { pageIndex, globalFilter },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <div>

    <div className="card card-header p-4 border-0 shadow-lg mb-3 mt-3">
        <div className="d-flex justify-content-between">
        <h3 className="text-xl d-flex items-center">Owner</h3>
        <img src={logo} className="" alt="logo" width="100px"/>
        </div>
        </div>

      <div className="card card-primary p-4 border-0 shadow-lg">
      <div className="d-flex justify-content-between">
        <button className="btn btn-primary mb-4" onClick={Create}><i class="fa-solid fa-circle-plus"></i></button>
        
          <input
            type="text"
            className="form-control form-control-sm mb-4"
            style={{ width: '200px' }}
            value={globalFilter || ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="Search..."
          />
       
        </div>
        <table className="table table-bordered" {...getTableProps()}>
          <thead className="table-primary">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " ▼"
                          : " ▲"
                        : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
        <button className="btn btn-lg"  onClick={() => gotoPage(0)}><i className="fa-sharp fa-solid fa-circle-left"></i></button>
          <button className="btn btn-lg" onClick={() => previousPage()}><i className="fa-sharp fa-solid fa-circle-chevron-left"></i></button>
          <button className="btn btn-lg" onClick={() => nextPage()}><i className="fa-sharp fa-solid fa-circle-chevron-right"></i></button>
          <button className="btn btn-lg" onClick={() => gotoPage(pageCount - 1)}><i className="fa-sharp fa-solid fa-circle-right"></i></button>
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
          <span>
            | Go to page:{" "}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const pageNumber = e.target.value
                  ? Number(e.target.value) - 1
                  : 0;
                gotoPage(pageNumber);
              }}
              style={{ width: "50px" }}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default OwnerList;
