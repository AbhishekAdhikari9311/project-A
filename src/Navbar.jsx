import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="container">
        <h1> Home Pages</h1>
        
          <button className="add-btn">➕ Add</button>
        
        {/* <h2> <Link to="/c">hello adhikari</Link></h2> */}
      </div>
    </>
  );
}

export default Navbar;
