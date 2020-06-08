import React from "react";

export default function Navbar() {
  const [wWidth, setwWidth] = React.useState(0);
  React.useEffect(() => {
    setwWidth(window.innerWidth);
  });
  return (
    <div className="navbar">
      <ul>
        <li>Home</li>
        <li>Committees</li>

        <li>Contact Us</li>
        <li>Archives</li>
        <li>Sponsors</li>
        <li>Journal</li>
      </ul>
      <style jsx>
        {`
          .navbar {
            position: fixed;
            background-color: transparent;
            height: 20vh;
            width: 80vw;
            margin-left: auto;
            right: 0;
            z-index: 99;
            color: white;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px;
          }
          .navbar ul {
            list-style-type: none;
            overflow: hidden;
          }
          .navbar ul li {
            display: block;
            width: 20%;
          }
        `}
      </style>
    </div>
  );
}
