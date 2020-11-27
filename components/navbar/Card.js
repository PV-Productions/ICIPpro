import React from "react";

const Card = ({ name, info }) => {
  const [wWidth, setwWidth] = React.useState(0);
  React.useEffect(() => {
    setwWidth(window.innerWidth);
  });
  return (
    <div
      className="cont"
      style={{ width:(wWidth>560?"20%":"50%"), padding: 20, textAlign: "center" }}
    >
      <h3 style={{ color: "red" }}>{name}</h3>
      <p style={{ fontSize: 12, fontWeight: 600 }}>{info}</p>
    </div>
  );
};

export default Card;
