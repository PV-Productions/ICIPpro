import React from "react";
import Particles from "react-particles-js";

export default function Landing() {
  const [wWidth, setwWidth] = React.useState(0);
  React.useEffect(() => {
    setwWidth(window.innerWidth);
  });
  console.log(wWidth);
  return (
    <div
      className="landing"
      style={{ width: wWidth > 560 ? "80vw" : "100vw", float: "right" }}
    >
      <div className="heading">
        <h1>ICInPro</h1>
        <h2>2020</h2>
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
          .heading {
            position: absolute;
            color: white;
            z-index: 999;
          }
          .heading h1 {
            font-size: 60px;
            color: white;
            font-weight: 500;
          }
          .heading h2 {
            font-size: 20px;
            color: white;
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
