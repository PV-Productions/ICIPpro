import React from "react";

const Card = ({ name, info }) => {
  return (
    <div
      className="cont"
      style={{ width: "20%", padding: 20, textAlign: "center" }}
    >
      <h3 style={{ color: "red" }}>{name}</h3>
      <p style={{ fontSize: 12, fontWeight: 600 }}>{info}</p>
    </div>
  );
};

export default Card;
