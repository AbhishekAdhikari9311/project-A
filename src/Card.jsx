import React from "react";
import Home from "./Home";
import "./home.css";
import Navbar from "./Navbar";

function Card() {
  return (
    <>
      
      <Home
        CardTitle="My Cat"
        CardSubtitle="Cute & Furry"
        Description="This is a description about my adorable cat who loves to play all day."
      />
    </>
  );
}

export default Card;
