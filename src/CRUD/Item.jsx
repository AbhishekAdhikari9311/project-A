import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Item() {
  const [data, setData] = useState([]);

  const { id } = useParams();

  const fetchdata = async () => {
    try {
      const response = await axios.get("http://localhost:3000/blog/" + id);
      // console.log("response", response.data.details);
      setData(response.data.data);

      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      <h1 className="card-title"> {data.title}</h1>
      <h2 className="card-subtitle">{data.subtitle}</h2>
      <h3 className="card-description">{data.description}</h3>
    </div>
  );
}

export default Item;
