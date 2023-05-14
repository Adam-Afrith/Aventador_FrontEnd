import React from "react";
import "../App.css";
import Routed from "../Router";
import Sidebar from "../Components/Sidebar/Sidebar";

function Master() {
  return (
    <div className="d-flex">
      <div>hii</div>
      <div>
        <Sidebar />
      </div>

      {/* <div className="content-wrapper">
        <Routed />
      </div> */}
    </div>
  );
}

export default Master;
