import React from "react";
import "./dashboard.css";

import { KeyboardArrowDown } from "@material-ui/icons";

const Dashboard = () => {
  return (
    <div className="others">
      <div className="dashboard">
        <h3>Dashboard</h3>
        <div className="select-dash">
          <h5>Sales Activity</h5>
          <select>
            <option>today</option>
            <option>tomorrow</option>
          </select>
        </div>
        <div className="box">
          <div className="box-size orange">
            <p>PENDING</p>
            <p style={{ fontWeight: "bolder", fontSize: "24px" }}>12</p>
          </div>
          <div className="box-size blue">
            <p>PACKED</p>
            <p style={{ fontWeight: "bolder", fontSize: "24px" }}>42</p>
          </div>
          <div className="box-size green">
            <p>DELIVERED</p>
            <p style={{ fontWeight: "bolder", fontSize: "24px" }}>27</p>
          </div>
          <div className="box-size pink">
            <p>CANCELLED</p>
            <p style={{ fontWeight: "bolder", fontSize: "24px" }}>9</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
