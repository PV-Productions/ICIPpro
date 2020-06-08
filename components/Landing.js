import React from "react";
import Particles from "react-particles-js";

export default function Landing() {
  return (
    <div className="landing">
      <div className="heading">
        <h1>ICInPro </h1>
        <h2>2020</h2>
      </div>
      <div
        style={{
          backgroundColor: "rgb(40,40,40)",
          width: "100%",
          height: "100vh",
        }}
      >
        <Particles
          params={{
            particles: {
              number: {
                value: 100,
              },
              size: {
                value: 3,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
        />
      </div>
      <style jsx>
        {`
          .landing {
            margin-left: 300px;
          }
          .heading {
            position: absolute;
            width: 50%;
            height: 60%;
            display: flex;
            align-items: center;
            justify-content: space-around;
            flex-wrap: wrap;
          }
          .heading h1 {
            font-size: 140px;
            color: white;
            font-weight: 500;
          }
          .heading h2 {
            position: absolute;
            top: 40%;
            font-size: 120px;
            color: white;
          }
        `}
      </style>
    </div>
  );
}
