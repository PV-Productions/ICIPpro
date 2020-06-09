import React from "react";

export default function Sidebar() {
  const [wWidth, setwWidth] = React.useState(0);
  React.useEffect(()=>{
    setwWidth(window.innerWidth);
  })
  return (
    <div>
      <div className="sidenav" style={{width:(wWidth>560?"20vw":"0vw")}}>
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
            box-shadow:1px 1px 20px 5px rgba(1,1,1,0.5);
            position: fixed;
            z-index: 1;
            top: 0;
            left: 0;
            background-color: rgb(178,34,34);
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
