import React from "react";
import "./TopBar.css";
import { NotificationsActive,KeyboardArrowDown } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarIconContainer">
        <NotificationsActive className="notify"/>
        <p>Notifications</p>
      </div>
      <div className="topbarIconContainer">
        <p>Jagadeesan</p>
        <KeyboardArrowDown className='notify-dropdown'/>
      </div>
    </div>
  );
}
