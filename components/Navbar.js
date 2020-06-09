import React from "react";
import Link from "next/link";

export default function Navbar() {
  const [wWidth, setwWidth] = React.useState(0);
  React.useEffect(() => {
    setwWidth(window.innerWidth);
  });
  // let mainNav = document.getElementById("js-menu");
  // let navBarToggle = document.getElementById("js-navbar-toggle");
  // navBarToggle.addEventListener("click", function () {
  //   mainNav.classList.toggle("active");
  // });
  return (
    <div
      style={{
        width: wWidth > 560 ? "80vw" : "100vw",
        float: "right",
        position: "absolute",
        zIndex: 9999,
        top: 0,
        marginLeft: "auto",
        right: 0,
      }}
    >
      <nav className="navbar">
        <img src="/logo2.png" alt="logo" className="logo" />
        <ul className="main-nav" id="js-menu">
          <li>
            <Link href="/">
              <a className="nav-links">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/nav/committees">
              <a className="nav-links">Committees</a>
            </Link>
          </li>
          <li>
            <Link href="/nav/contact">
              <a className="nav-links">Contact Us</a>
            </Link>
          </li>
          <li>
            <Link href="/nav/archive">
              <a className="nav-links">Archives</a>
            </Link>
          </li>
          <li>
            <Link href="/nav/sponsors">
              <a className="nav-links">Sponsors</a>
            </Link>
          </li>
          <li>
            <Link href="/nav/jounral">
              <a className="nav-links">Journal</a>
            </Link>
          </li>
        </ul>
      </nav>

      <style jsx>
        {`
          .navbar {
            font-size: 11.5px;
            background-color: rgba(250, 250, 250, 0.8);
            color: black;
            padding-bottom: 10px;
            box-shadow: 2px 2px 20px 5px lightgray;
            height: 10vh;
            border-bottom: 2px solid rgb(178, 34, 34);
          }

          .main-nav {
            list-style-type: none;
            display: flex;
            margin-right: 30px;
            margin-top: -55px;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            font-weight: 900;
          }

          .nav-links,
          .logo {
            text-decoration: none;
            color: black;
          }

          .main-nav li {
            text-align: center;

            padding: 10px;
          }
          .main-nav li:nth-child(3) {
            display: none;
          }

          .logo {
            width: 150px;
            height: 130px;

            margin-top: -35px;
          }

          .navbar-toggle {
            position: absolute;
            top: 10px;
            right: 20px;
            cursor: pointer;
            color: rgba(0, 0, 0, 1);
            font-size: 24px;
          }

          .active {
            display: block;
          }

          @media screen and (min-width: 768px) {
            .navbar {
              display: flex;
              justify-content: space-between;
              padding-bottom: 0;
              height: 10vh;
              align-items: center;
              font-size: 18px;
            }

            .main-nav {
              display: flex;
              margin-right: 30px;
              margin-top: 10px;
              font-weight: 300;
              flex-direction: row;
              justify-content: flex-end;
            }

            .main-nav li {
              margin: 0;
              padding: 0px;
            }
            .main-nav li:nth-child(3) {
              display: block;
            }

            .nav-links {
              margin-left: 40px;
            }

            .logo {
              margin-top: 0;
              width: 200px;
              height: 150px;
            }

            .navbar-toggle {
              display: none;
            }

            .logo:hover,
            .nav-links:hover {
              color: rgba(255, 255, 255, 1);
            }
          }
        `}
      </style>
    </div>
  );
}
