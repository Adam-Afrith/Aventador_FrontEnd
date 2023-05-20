import React from "react";

const AttendanceLog = () => {
  const rows = [];
  for (let i = 0; i < 30; i++) {
    rows.push(rows);
  }
  return (
    <>
      <h3>Attendance Log</h3>
      <div className="card card-primary p-4 border-0 shadow-lg">
        <table className="table table-bordered">
          <thead className="table-primary">
            <tr>
              <th scope="col">Log</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              No.Of Days
              {rows.map((element, index) => (
                <th>{++index}</th>
              ))}
            </tr>
            <tr>
              Days Present
              {rows.map((element, index) => (
                <th>
                  <input type="checkbox" name="" id="" />
                </th>
              ))}
            </tr>
            <tr>
              <th>
                Name
                {/* <i class="fi fi-rr-user"></i>
                <i class="fi fi-br-arrow-right"></i>
                <i class="fi fi-sr-book"></i>
                <i class="fi fi-rr-broom"></i>
                <i class="fi fi-brands-facebook"></i> */}
                <i class="fi fi-ss-star"></i>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AttendanceLog;
