import React from "react";

function ItemCard({ title, subtitle, description }) {
  console.log("ItemCard");
  return (
    <div>
      <h1 className="card-title"> {title}</h1>
      <h2 className="card-subtitle">{subtitle}</h2>
      <h3 className="card-description">{description}</h3>
    </div>
  );
}

export default ItemCard;
