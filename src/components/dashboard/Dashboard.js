import React from "react";
import './dashboard.css'
import { KeyboardArrowDown } from "@material-ui/icons";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>dashboard</h1>
      <div>
        <h3>Sales Activity</h3>
        <p>
          Today
          <KeyboardArrowDown />
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default Dashboard;
