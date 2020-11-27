import React from "react";
import Link from "next/link";
import Head from "next/head";

export default function Navbar() {
  const [wWidth, setwWidth] = React.useState(0);
  React.useEffect(() => {
    setwWidth(window.innerWidth);
  });

  return (
    <div
      style={{
        width: wWidth > 560 ? "100vw" : "100vw",
        float: "right",
        position: "fixed",
        zIndex: 999,
        top: 0,
        marginLeft: "auto",
        right: 0,
      }}
    >
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Head>
    
      <nav className="navbar">
        <img src="/logo123.png" alt="logo" className="logo" />
        <ul className="main-nav" id="js-menu">
          <li>
            <Link href="/">
              <a className="nav-links">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/sb/about">
              <a className="nav-links">About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/nav/committees">
              <a className="nav-links">Committees</a>
            </Link>
          </li>
          <li>
            <Link href="/sb/callfor">
              <a className="nav-links">Call for papers</a>
            </Link>
          </li>
          <li>
            <Link href="/sb/dates">
              <a className="nav-links">Important Dates</a>
            </Link>
          </li>
          <li>
            <Link href="/sb/papers">
              <a className="nav-links">Publication</a>
            </Link>
          </li>
          <li>
            <Link href="/sb/registration">
              <a className="nav-links">Registration</a>
            </Link>
          </li>
          <li>
            <Link href="/sb/guidelines">
              <a className="nav-links">Guidelines</a>
            </Link>
          </li>

          <li>
            <a
              className="nav-links"
              href="http://icipbangalore.org/"
              target="_blank"
            >
              Archive
            </a>
          </li>
          <li>
            <Link href="/nav/sponsors">
              <a className="nav-links">Sponsors</a>
            </Link>
          </li>
        </ul>
        <div style={{ position: "absolute", top: 0, right: 0 }}>
          <div className="menu"></div>
          <div className="menu"></div>
          <div className="menu"></div>
        </div>
      </nav>

      <style jsx>
        {`
          .navbar {
            font-size: 7px;
            background-color: lightblue;
            color: #800000;
            padding-bottom: 10px;
            box-shadow: 2px 2px 20px 5px rgba(0, 0, 0, 0.2);
            height: 12vh;
            border-bottom: 2px solid grey;
            z-index: 1000;
          }

          .main-nav {
            list-style-type: none;
            display: flex;
            margin-right: 30px;
            margin-top: -58px;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            font-weight: 600;
          }

          .nav-links {
            padding: 0;
          }

          .nav-links,
          .logo {
            text-decoration: none;
            color: #800000;
          }

          .main-nav li {
            text-align: center;

            padding: 10px;
          }

          .main-nav li:nth-child(7) {
            display: none;
          }
          .main-nav li:nth-child(8) {
            display: none;
          }
          .main-nav li:nth-child(9) {
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
          .menu {
            width: 30px;
            height: 4px;
            background-color: black;
            margin: 6px 10px;
          }

          @media screen and (min-width: 768px) {
            .navbar {
              display: flex;
              justify-content: space-between;
              padding-bottom: 0;
              height: 10vh;
              align-items: center;
              font-size: 14px;
              text-transform: uppercase;

              color: #800000;
            }

            .main-nav {
              display: flex;
              margin-right: 20px;
              margin-top: 10px;
              font-weight: 300;
              flex-direction: row;
              justify-content: flex-end;
            }

            .main-nav li {
              margin: 0;
              padding: 0px;
            }
            .main-nav li:nth-child(4) {
              display: block;
            }
            .main-nav li:nth-child(7) {
              display: block;
            }
            .main-nav li:nth-child(9) {
              display: block;
            }

            .nav-links {
              margin-left: 25px;
              transition: all 0.2s ease-in-out;
              font-weight: 700;
            }

            .logo {
              margin-top: 0;
              width: 200px;
              height: 150px;
            }

            .navbar-toggle {
              display: none;
            }
            .menu {
              display: none;
            }

            .logo:hover,
            .nav-links:hover {
              color: rgba(0, 0, 0, 1);
              transition: all 0.2s ease-in-out;
            }
          }
        `}
      </style>
    </div>
  );
}
