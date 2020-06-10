import React from "react";
import Link from "next/link";
export default function Sidebar() {
  const [wWidth, setwWidth] = React.useState(0);
  React.useEffect(() => {
    setwWidth(window.innerWidth);
  });
  return (
    <div>
      <div className="sidenav" style={{ width: wWidth > 560 ? "20vw" : "0vw" }}>
        <a href="#about">Conference program schedule</a>
        <a href="#services">Tutorial Program</a>
        <a href="#clients">Keynote Speakers</a>
        <a href="#contact">Accepted Papers</a>
        <a href="#about">Presentation Guidelines</a>
        <Link href="/sb/cultural">
          <a>Cultural program</a>
        </Link>
        <a href="#clients">CRC instructions</a>
        <a href="#contact">Registration</a>
        <Link href="/sb/callfor">
          <a>Call for papers</a>
        </Link>
        <a href="#services">Important dates</a>
        <Link href="/sb/guidelines">
          <a>Author guidelines</a>
        </Link>
        <Link href="/sb/venue">
          <a>Venue</a>
        </Link>
        <Link href="/sb/accomodation">
          <a>Accomodation</a>
        </Link>
        <Link href="/sb/about">
          <a>About Us</a>
        </Link>
        <Link href="/sb/gallery">
          <a>Photo gallery</a>
        </Link>
      </div>
      <style jsx>
        {`
          .sidenav {
            height: 100%;
            box-shadow: 1px 1px 20px 5px rgba(1, 1, 1, 0.5);
            position: fixed;
            z-index: 1000;
            top: 0;
            left: 0;
            background-color: rgb(178, 34, 34);
            overflow-x: hidden;
            padding-top: 20px;
          }

          .sidenav a {
            padding: 15px 18px 16px 0px;
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
