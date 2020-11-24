import React from "react";

const Card = ({ name, info }) => {
  return (
    <div
      className="cont"
      style={{ width: "25%", padding: 20, textAlign: "center" }}
    >
      <h2 style={{ color: "red" }}>{name}</h2>
      <p>{info}</p>
    </div>
  );
};

export default Card;
