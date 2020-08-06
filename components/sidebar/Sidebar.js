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
        <Link href="/sb/schedule">
          <a>Conference program schedule</a>
        </Link>
        <Link href="/sb/tutorial">
          <a>Tutorial Program</a>
        </Link>
        <Link href="/sb/speakers">
          <a>Keynote Speakers</a>
        </Link>
        <Link href="/sb/papers">
          <a>Accepted Papers</a>
        </Link>
        <Link href="/sb/pguidelines">
          <a>Presentation Guidelines</a>
        </Link>
        <Link href="/sb/cultural">
          <a>Cultural program</a>
        </Link>
        <Link href="/sb/CRC">
          <a>CRC instructions</a>
        </Link>
        <Link href="/sb/registration">
          <a>Registration</a>
        </Link>
        <Link href="/sb/callfor">
          <a>Call for papers</a>
        </Link>
        <Link href="/sb/dates">
          <a>Important dates</a>
        </Link>
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
            background: linear-gradient(to bottom right, lightgreen, lightblue);
            overflow-x: hidden;
            padding-top: 20px;
          }

          .sidenav a {
            padding: 15px 18px 16px 0px;
            text-align: center;
            text-decoration: none;
            font-size: 17px;
            color: #800000;
            display: block;
          }
          .sidenav a:nth-child(1) {
            padding-top: 0px;
          }
        `}
      </style>
    </div>
  );
}
