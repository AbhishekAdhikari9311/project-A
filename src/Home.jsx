import React from "react";
import Navbar from "./Navbar";
import "./home.css";
function Home({ CardTitle, CardSubtitle, Description }) {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h1 className="card-title"> {CardTitle}</h1>
          <h2 className="card-subtitle">{CardSubtitle}</h2>
          <p className="card-description">{Description}</p>
        </div>

        <div className="card-body">
          <h1 className="card-title"> {CardTitle}</h1>
          <h2 className="card-subtitle">{CardSubtitle}</h2>
          <p className="card-description">{Description}</p>
        </div>

        <div className="card-body">
          <h1 className="card-title"> {CardTitle}</h1>
          <h2 className="card-subtitle">{CardSubtitle}</h2>
          <p className="card-description">{Description}</p>
        </div>

        <div className="card-body">
          <h1 className="card-title"> {CardTitle}</h1>
          <h2 className="card-subtitle">{CardSubtitle}</h2>
          <p className="card-description">{Description}</p>
        </div>
      </div>
    </>
  );
}

export default Home;
