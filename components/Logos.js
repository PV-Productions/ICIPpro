import React from "react";

export default function Logos() {
  const [wWidth, setwWidth] = React.useState(0);
  React.useEffect(() => {
    setwWidth(window.innerWidth);
  });
  return (
    <div
      className="logos"
      style={{ width: wWidth > 560 ? "80vw" : "100vw", float: "right" }}
    >
      <div className="wrapper">
        <img src="/logo3Artboard 1PNG.png" />
        <div className="card" style={{ background: "pink" }}>
          <h2>Card Title</h2>
          <p>Card Details</p>
        </div>
        <img src="/logo2Artboard 1PNG.png" />
      </div>
      <div
        className="wrapper"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          width: "80vw",
        }}
      >
        <div className="card" style={{ background: "lightblue" }}>
          <h2>Card Title</h2>
          <p>Card Details</p>
        </div>
        <img src="/logo PNG.png" />
        <div className="card" style={{ background: "lightblue" }}>
          <h2>Card Title</h2>
          <p>Card Details</p>
        </div>
      </div>
      <style jsx>{`
        .logos {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          padding-top: 80px;
        }
        .wrapper {
          display: flex;
          align-items: center;
          justify-content: space-around;
          flex-wrap: wrap;
          height: ${wWidth > 560 ? "40vh" : "20vh"};
        }
        img {
          width: ${wWidth > 560 ? "22%" : "40%"};
        }
        img:nth-child(2) {
          width: ${wWidth > 560 ? "30%" : "70%"};
        }
        .card {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
          padding: ${wWidth > 560 ? "75px" : "30px"};
          text-align: center;
          font-size: 20px;
          display: ${wWidth > 560 ? "block" : "none"};
        }
      `}</style>
    </div>
  );
}
