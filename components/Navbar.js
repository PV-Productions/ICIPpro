import React from "react";

export default function Navbar() {
  const [wWidth, setwWidth] = React.useState(0);
  React.useEffect(() => {
    setwWidth(window.innerWidth);
  });
  return (
    <div
      style={{
        width: (wWidth > 560 ? "80vw" : "100vw"),
        float: "right",
        position: "absolute",
        zIndex: 9999,
        top: 0,
        marginLeft: "auto",
        right: 0,
      }}
    >
      <nav className="navbar">
        <span className="navbar-toggle" id="js-navbar-toggle">
          <i className="fas fa-bars"></i>
        </span>
        <img src="/logo2.png" alt="logo" className="logo" />
        <ul className="main-nav" id="js-menu">
          <li>
            <a className="nav-links">Home</a>
          </li>
          <li>
            <a className="nav-links">Committees</a>
          </li>
          <li>
            <a className="nav-links">Contact Us</a>
          </li>
          <li>
            <a className="nav-links">Archives</a>
          </li>
          <li>
            <a className="nav-links">Sponsors</a>
          </li>
          <li>
            <a className="nav-links">Journal</a>
          </li>
        </ul>
      </nav>

      <style jsx>
        {`
          .navbar {
            font-size: 18px;
            background-color: rgba(250,250,250,0.6);
            color:black;
            padding-bottom: 10px;
            box-shadow: 2px 2px 20px 5px lightgray;
          
            border-bottom:2px solid rgb(178,34,34);
          }

          .main-nav {
            list-style-type: none;
            display: none;
          }

          .nav-links,
          .logo {
            text-decoration: none;
           
          }

          .main-nav li {
            text-align: center;
            margin: 15px auto;
          }

          .logo {
            width: 200px;
            height: 150px;
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
            }

            .main-nav {
              display: flex;
              margin-right: 30px;
              flex-direction: row;
              justify-content: flex-end;
            }

            .main-nav li {
              margin: 0;
            }

            .nav-links {
              margin-left: 40px;
            }

            .logo {
              margin-top: 0;
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
