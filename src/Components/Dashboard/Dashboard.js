import React from "react";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { Chart } from "react-google-charts";
import Calendar from "react-calendar";
import logo from "../../assets/logos/trophy.png";
import bg from "../../assets/images/duke_1290.jpg";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Sale", 4],
  ["Growth", 5],
  ["Bike", 3],
  ["Car", 7],
];

export const options = {
  title: "Activity Log",
};

const Dashboard = () => {
  const TITLE = "DASHB";

  const [change, setChange] = useState(new Date());

  return (
    <div>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <h1>AVENTADOR</h1>

      <img src={bg} className="" alt="logo" width="1400px" />
      <br />
      <h2>Dashboard Page</h2>
      <img src={logo} className="" alt="logo" width="300px" />
      <button className="btn btn-primary">GO</button>
      <br />
      <br />
      <div className="calendar" align="center">
        <Calendar onChange={setChange} value={change} />
      </div>

      <div className="chart">
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"400px"}
        />
      </div>
    </div>
  );
};

export default Dashboard;
