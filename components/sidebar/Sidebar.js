import React from "react";

export default function Sidebar() {
  return (
    <div>
      <div className="sidenav">
        <a href="#about">Conference program schedule</a>
        <a href="#services">Tutorial Program</a>
        <a href="#clients">Keynote Speakers</a>
        <a href="#contact">Accepted Papers</a>
        <a href="#about">Presentation Guidelines</a>
        <a href="#services">Cultural program</a>
        <a href="#clients">CRC instructions</a>
        <a href="#contact">Registration</a>
        <a href="#about">Call for papers</a>
        <a href="#services">Important dates</a>
        <a href="#clients">Author guidelines</a>
        <a href="#contact">Venue</a>
        <a href="#about">Accomodation</a>
        <a href="#services">About Us</a>
        <a href="#clients">Photo gallery</a>
      </div>
      <style jsx>
        {`
          .sidenav {
            height: 100%;
            width: 300px;
            position: fixed;
            z-index: 1;
            top: 0;
            left: 0;
            background-color: #111;
            overflow-x: hidden;
            padding-top: 20px;
          }

          .sidenav a {
            padding: 13px 18px 16px 0px;
            text-align: center;
            text-decoration: none;
            font-size: 17px;
            color: white;
            display: block;
          }
          .sidenav a:nth-child(1) {
            padding-top: 0px;
          }

          .sidenav a:hover {
            color: lightgrey;
          }
        `}
      </style>
    </div>
  );
}
