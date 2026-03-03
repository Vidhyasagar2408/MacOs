import React from "react";
import "./nav.scss";
import DateTime from "./DateTime";
const Nav = () => {
  return (
    <nav>
      <div className="left">
        <i className="ri-apple-fill"></i>

        <div className="nav-item">
          <p>Vidhyasagar</p>
        </div>

        <div className="nav-item">
          <p>File</p>
        </div>

        <div className="nav-item">
          <p>Window</p>
        </div>

        <div className="nav-item">
          <p>Terminal</p>
        </div>
      </div>
      <div className="right">
        <div className="nav-icon">
          <i className="ri-wifi-line"></i>
        </div>
        <div className="nav-icon">
          <DateTime />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
