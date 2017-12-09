import React from "react";
import { Link } from "react-router-dom";

const Navpills = () =>
  <ul className="nav nav-tabs">
    <li className={window.location.pathname === "/" ? "active" : ""}>
      <Link to="/">About</Link>
    </li>
    <li className={window.location.pathname === "/discover" ? "active" : ""}>
      <Link to="/discover">Discover</Link>
    </li>
    <li className={window.location.pathname === "/Search" ? "active" : ""}>
      <Link to="/search">Search</Link>
    </li>
  </ul>;

export default Navpills;
