import React from "react";
import Particles from "react-particles-js";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Link from "next/link";

export default function Landing() {
  const [wWidth, setwWidth] = React.useState(0);
  React.useEffect(() => {
    setwWidth(window.innerWidth);
  });

  return (
    <div
      className="landing"
      style={{ width: wWidth > 560 ? "100vw" : "100vw", float: "right" }}
    >
      <div className="wrapper">
        <div className="heading">
          <h1>
            <Zoom duration={800} delay={200}>
              {" "}
              International Conference{" "}
            </Zoom>{" "}
            <Zoom duration={800} delay={500}>
              {" "}
              on
            </Zoom>
            <Zoom duration={800} delay={900}>
              {" "}
              Information processing
            </Zoom>
            <Fade duration={1500} delay={1300}>
              <h3>ICInPro-2021</h3>
            </Fade>
          </h1>
        </div>
        <div className="dropdown">
          <button className="dropbtn">
            Important <br /> Dates
          </button>
          <div className="dropdown-content">
            <div style={{ overflowX: "auto" }}>
              <table>
                <tr>
                  <td>To Be Filled</td>
                  <td>To Be Filled</td>
                </tr>
                <tr>
                  <td>To Be Filled</td>
                  <td>To Be Filled</td>
                </tr>
                <tr>
                  <td>To Be Filled</td>
                  <td>To Be Filled</td>
                </tr>
                <tr>
                  <td>To Be Filled</td>
                  <td>To Be Filled</td>
                </tr>
                <tr>
                  <td>To Be Filled</td>
                  <td>To Be Filled</td>
                </tr>
                <tr>
                  <td>To Be Filled</td>
                  <td>To Be Filled</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button className="but1">Explore</button>
          <Link href="/sb/registration">
            <button className="but2">Register</button>
          </Link>
        </div>

        <div className="downicon">
          <Fade top duration={1700} forever={true}>
            <i className="fa fa-angle-down" style={{ fontSize: "30px" }}></i>
          </Fade>
        </div>

        <div
          className="overlay"
          style={{
            width: wWidth > 560 ? "100vw" : "100vw",
            height: "75vh",
            float: "right",
          }}
        ></div>
        {wWidth > 560 ? (
          <video autoPlay muted loop style={{ height: "75vh" }}>
            <source type="video/mp4" src="/bgvids.mp4" />
          </video>
        ) : (
          <div
            style={{ position: "absolute", height: "90vh", marginTop: "10vh" }}
          >
            <img
              src="https://images.jdmagicbox.com/comp/bangalore/26/080p5000426/catalogue/uvce-college-kr-circle-bangalore-colleges-f8ctiyoz49.jpg"
              style={{ height: "100vh" }}
            />
          </div>
        )}
      </div>
      <style jsx>
        {`
          table,
          th,
          td {
            border: 1px solid black;
            padding: 3px;
          }
          .dropbtn {
            background-color: #4caf50;
            color: white;
            padding: 25px;
            font-size: 16px;
            border: none;
            cursor: pointer;
            border-radius: 50%;
          }

          .dropdown {
            position: fixed;
            display: inline-block;
            z-index: 999;
            right: 0;
            top: 20%;
            transform: translate(-20%, -50%);
          }

          .dropdown-content {
            display: none;
            position: absolute;
            right: 0;
            background-color: #f9f9f9;
            min-width: 187.5px;
            box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
            z-index: 1;
          }

          .dropdown-content a {
            color: black;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
          }

          .dropdown-content a:hover {
            background-color: #f1f1f1;
          }

          .dropdown:hover .dropdown-content {
            display: block;
          }

          .dropdown:hover .dropbtn {
            background-color: #3e8e41;
          }
          .landing {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            height: 60vh;
            background-attatchment: fixed;
            margin-top: 15vh;
          }
          .wrapper {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            background-attatchment: fixed;
          }
          .heading {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            text-align: center;
            color: white;
            z-index: 99;
          }
          .heading h1 {
            text-shadow: ${wWidth > 560
              ? "3px 3px 10px black"
              : "5px 5px 20px black"};
            font-size: ${wWidth > 560 ? "65px" : "37px"};
            color: white;
            font-weight: ${wWidth > 560 ? "500" : "900"};
          }
          .heading h3 {
            font-size: ${wWidth > 560 ? "24px" : "15px"};
            font-weight: 200;
            margin: 10px;
          }
          .buttons {
            position: absolute;
            top: 80%;
            width: ${wWidth > 560 ? "50vw" : "90vw"};
            display: flex;
            align-items: center;
            justify-content: space-around;
            margin-top: ${wWidth > 560 ? "0px" : "170px"};
            z-index: 99;
          }
          .but1 {
            color: black;
            transition: all 0.3s ease-in-out;
            background-color: white;
            border: 3px solid white;
            width: 200px;
            border-radius: 30px;
            padding: 10px;
            font-weight: 600;
            font-size: 15px;
            outline: none;
            cursor: pointer;
            display: ${wWidth > 560 ? "block" : "none"};
          }
          .but1:hover {
            background-color: transparent;
            transition: all 0.3s ease-in-out;
            color: white;
          }
          .but2 {
            background-color: ${wWidth > 560 ? "transparent" : "white"};
            color: ${wWidth > 560 ? "white" : "black"};
            transition: all 0.3s ease-in-out;
            border: 3px solid white;
            width: 200px;
            border-radius: 30px;
            padding: 10px;
            font-weight: 600;
            font-size: 15px;
            outline: none;
            cursor: pointer;
          }
          .but2:hover {
            background-color: white;
            transition: all 0.3s ease-in-out;
            color: black;
          }
          .downicon {
            position: absolute;
            top: 90%;
            color: white;
            z-index: 99;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
            margin-top: ${wWidth > 560 ? "0px" : "250px"};
          }
          .downicon:hover {
            transform: scale(1.4);
          }

          .landing video {
            height: 100vh;
            width: 100vw;

            object-fit: cover;
          }
          .overlay {
            position: absolute;
            height: 100vh;

            float: right;
            background-color: rgba(1, 1, 1, 0.5);
          }
        `}
      </style>
    </div>
  );
}
