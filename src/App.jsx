import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Card from "./Card";
import Get from "./CRUD/Get";
import ItemCard from "./CRUD/ItemCard";
import Item from "./CRUD/Item";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          {/* <Route path="/b" element={<Contact />} /> */}
          {/* <Route path="/c" element={<Navbar />} /> */}
          {/* <Route path="/c" element={<Home />} /> */}
          <Route path="/blog/:id" element={<Item />} />
          <Route path="/hello" element={<Get />} />
          {/* <Route path="" element={<Card />} /> */}

          {/* <Route path="/" element={<h1>hello newari</h1>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
