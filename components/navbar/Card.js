import React from "react";

const Card = ({ name, info }) => {
  return (
    <div className="cont" style={{ width: "25%", padding: 20 }}>
      <h3 style={{ color: "red" }}>{name}</h3>
      <p>{info}</p>
    </div>
  );
};

export default Card;
