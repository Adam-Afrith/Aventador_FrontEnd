import React from "react";
import { Chart } from "react-google-charts";
import logo from "../../assets/logos/trophy.png";

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
  return (
    <div>
      <h1>AVENTADOR</h1>
      <h2>Dashboard Page</h2>
      <img src={logo} className="" alt="logo" width="300px" />
      <button className="btn btn-primary">GO</button>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
};

export default Dashboard;
