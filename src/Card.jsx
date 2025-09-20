import React from "react";
import Home from "./Home";
import "./home.css";
import Navbar from "./Navbar";
import Get from "./CRUD/Get";
import { Link } from "react-router-dom";

function Card() {
  return (
    <>
      {/* <Navbar /> */}
      <Get title="ram" subtitle="sita" description="ram weds sita" />
      {/* <Home
        CardTitle="My Cat"
        CardSubtitle="Cute & Furry"
        Description="This is a description about my adorable cat who loves to play all day."
      /> */}
      
    </>
  );
}

export default Card;
