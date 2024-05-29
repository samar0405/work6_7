import React from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink to="/main" className="navlink">
        Cars
      </NavLink>
      <NavLink to="/main/brand" className="navlink">
        Brand
      </NavLink>
      <NavLink to="/" className="navlink">
        Log out
      </NavLink>
    </div>
  );
};

export default Sidebar;
