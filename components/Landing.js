import React from "react";
import Particles from "react-particles-js";

export default function Landing() {
  const [wWidth, setwWidth] = React.useState(0);
  React.useEffect(() => {
    setwWidth(window.innerWidth);
  });

  return (
    <div
      className="landing"
      style={{ width: wWidth > 560 ? "80vw" : "100vw", float: "right" }}
    >
      <div className="wrapper">
        <div className="heading">
          <h1>
            International Conference <br />
            On
            <br />
            Information processing
            <h3>ICINpro-2020</h3>
          </h1>
        </div>
        <div className="buttons">
          <button className="but1">Explore</button>
          <button className="but2">Register</button>
        </div>
        <div className="downicon">
          <i className="fa fa-angle-down" style={{ fontSize: "40px" }}></i>
        </div>

        <div
          className="overlay"
          style={{ width: wWidth > 560 ? "80vw" : "100vw", float: "right" }}
        ></div>
        {wWidth > 560 ? (
          <video autoPlay muted loop>
            <source type="video/mp4" src="/main.mp4" />
          </video>
        ) : (
          <div></div>
        )}
      </div>
      <style jsx>
        {`
          .landing {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            height: 100vh;
          }
          .wrapper {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .heading {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            text-align: center;
            color: white;
            z-index: 999;
          }
          .heading h1 {
            text-transform: uppercase;
            text-shadow: 1px 1px 10px black;
            font-size: 60px;
            color: white;
            font-weight: 500;
          }
          .heading h3 {
            font-size: 25px;
          }
          .buttons {
            position: absolute;
            top: 80%;
            width: 50vw;
            display: flex;
            align-items: center;
            justify-content: space-around;
            z-index: 99;
          }
          .but1 {
            color: black;
            transition: all 0.3s ease-in-out;
            background-color: white;
            border: 3px solid white;
            width: 250px;
            border-radius: 30px;
            padding: 10px;
            font-weight: 600;
            font-size: 15px;
            outline: none;
            cursor: pointer;
          }
          .but1:hover {
            background-color: transparent;
            transition: all 0.3s ease-in-out;
            color: white;
          }
          .but2 {
            background-color: transparent;
            color: white;
            transition: all 0.3s ease-in-out;
            border: 3px solid white;
            width: 250px;
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
          }
          .downicon:hover {
            transform: scale(1.4);
          }

          .landing video {
            height: 100vh;
            width: 80vw;

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
