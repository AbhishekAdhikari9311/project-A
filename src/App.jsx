import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Card from "./Card";

function App() {


  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          {/* <Route path="/b" element={<Contact />} /> */}
          {/* <Route path="/c" element={<Navbar />} /> */}
          {/* <Route path="/c" element={<Home />} /> */}
          <Route path="/d" element={<Contact />} />

          <Route path="/" element={<h1>hello newari</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
