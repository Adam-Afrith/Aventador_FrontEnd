import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const FileList = () => {
  return (
    <>
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
