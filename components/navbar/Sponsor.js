import React from "react";
import logo from "../../public/logo PNG.png";

export default function Sponsor() {
  const [wWidth, setwWidth] = React.useState(0);
  React.useEffect(() => {
    setwWidth(window.innerWidth);
  });
  return (
    <div
      className="wrapperS"
      style={{ width: wWidth > 560 ? "100vw" : "100vw", float: "right" }}
    >
      <h1
        className="headerS"
        style={{
          fontSize: wWidth > 560 ? "72px" : "48px",
          width: wWidth > 560 ? "100vw" : "100vw",
        }}
      >
        Sponsors
      </h1>
      <div className="one" style={{ width: wWidth > 560 ? "100%" : "80%" }}>
        <img
          width={wWidth > 560 ? "300" : "180"}
          height="240"
          src="/logo2Artboard 1PNG.png"
        ></img>
        <h3>
          Computing Professionals <br /> Charitable Trust (CPCT), Bangalore.
        </h3>
      </div>

      <div className="one" style={{ width: wWidth > 560 ? "100%" : "80%" }}>
        <img
          width={wWidth > 560 ? "300" : "180"}
          height="200"
          src="/logo PNG.png"
        ></img>
        <h3>IEEE Bangalore Section</h3>
      </div>
      <div className="one" style={{ width: wWidth > 560 ? "100%" : "80%" }}>
        <img
          width={wWidth > 560 ? "300" : "180"}
          height="240"
          src="/logo3Artboard 1PNG.png"
        ></img>
        <h3>
          University Visvesvaraya College of Engineering,
          <br />
          Department of Computer Science and Engineering,
          <br />
          Bangalore University, Bangalore - 560 001.
        </h3>
      </div>
      <div className="one" style={{ width: wWidth > 560 ? "100%" : "80%" }}>
        <img
          width={wWidth > 560 ? "300" : "180"}
          height="200"
          src="https://securelink.net/wp-content/uploads/2019/02/Juniper-Networks.png"
        ></img>
        <h3>
          Juniper Networks <br /> Networking and Cyber Security solutions
          <br />
          California, USA
        </h3>
      </div>

      <style jsx>
        {`
          .wrapperS {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            margin-top: 12vh;
          }
          .headerS {
            width: 80vw;
            text-align: center;
            background-color: lightgreen;
            color: white;
            box-shadow: 2px 2px 10px 5px rgba(220, 220, 220, 0.5);
            margin-bottom: 40px;
          }
          .one {
            height: auto;
            // border:1px solid rgba(240,240,240,0.7);
            // box-shadow:2px 2px 10px 5px rgba(240,240,240,0.7);
            padding: 50px;

            text-align: center;
          }
          .one h3 {
            width: 100%;
            padding: 30px;
          }
        `}
      </style>
    </div>
  );
}
