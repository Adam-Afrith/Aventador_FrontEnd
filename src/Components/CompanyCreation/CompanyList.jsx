import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import logo from "../../assets/logos/letter-c.png";
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
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from "react-table";

const CompanyCreation = () => {

  const { id } = useParams();
  const [company, setCompany] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/company").then((resp) => {
      setCompany(resp.data.company);
    });
  }, []);

  const navigate = useNavigate();
  const Create = () => {
    navigate("/CompanyCreation");
  };

  const editCompany = (id) => {
    navigate(`/CompanyCreation/${id}`);
  };

  const deleteHandler = (id) => {
    deleteData(id);
  };

  const deleteData = (id) => {
    
    Swal.fire({
      icon: "warning",
      title: "Delete Company",
      text: "Are you sure you want to delete this company?",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:8000/api/company/${id}`)
          .then((res) => {
            if (res.data.status === 200) {
              Swal.fire({
                icon: "success",
                title: "Company",
                text: "Deleted Successfully!",
                confirmButtonColor: "#5156ed",
              });
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
      }
    });
  };


  const data = React.useMemo(() => company, [company]);
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
        Header: "Action",
        Cell: ({ row }) => (
          <div>
            <Tooltip title="Edit">
              <IconButton
                aria-label="edit"
                onClick={() => editCompany(row.original.id)}
              >
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton
                aria-label="delete"
                onClick={() => deleteHandler(row.original.id)}
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
      <h2>
        <img src={logo} className="" alt="logo" width="100px" />
        Company
      </h2>
      <Fab color="primary" aria-label="add" onClick={Create}>
        <AddIcon />
      </Fab>

      <h3>Company List</h3>
      <div className="card card-primary p-4 border-0 shadow-lg">
        <div>
          <input
            type="text"
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
          <button onClick={() => gotoPage(0)}>{"<<"}</button>{" "}
          <button onClick={() => previousPage()}>{"<"}</button>{" "}
          <button onClick={() => nextPage()}>{">"}</button>{" "}
          <button onClick={() => gotoPage(pageCount - 1)}>{">>"}</button>{" "}
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

export default CompanyCreation;
