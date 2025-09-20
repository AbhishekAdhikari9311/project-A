import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ItemCard from "./ItemCard";

function Get() {
  const [data, setData] = useState([]);
  // console.log("hi abhishek", data);
  const { id } = useParams();
  const navigate = useNavigate();
  const fetchdata = async () => {
    try {
      const response = await axios.get("http://localhost:3000/hello");
      // console.log("response", response.data.details);
      setData(response.data.details);

      console.log(response.data.details);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="card">
      {data.map((d) => (
        <div
          onClick={() => {
            navigate(`/blog/${d._id}`);
          }}
          key={d._id}
          className="card-body"
        >
          <ItemCard
            title={d.title}
            subtitle={d.subtitle}
            description={d.description}
          />
        </div>
      ))}
    </div>
  );
}
export default Get;
