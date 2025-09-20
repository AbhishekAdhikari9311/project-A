import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <a href="#">Home</a>
        <button class="btn">➕ Add</button>
      </div>
    </>
  );
}

export default Navbar;
