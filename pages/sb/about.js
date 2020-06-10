import React from "react";
import SBLayout from "../../components/SBLayout";

export default function venue() {
  const [wWidth, setwWidth] = React.useState(0);
  React.useEffect(() => {
    setwWidth(window.innerWidth);
  });
  return (
    <SBLayout>
      <div
        className="wrapperVEN"
        style={{ width: wWidth > 560 ? "80vw" : "100vw", float: "right" }}
      >
        <div className="banner">
          <h1
            className="aboutCALL"
            style={{ fontSize: wWidth > 560 ? "72px" : "48px" }}
          >
            About ICInPro
          </h1>
        </div>
        <div
          className="wrapper"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: wWidth > 560 ? "78vw" : "100vw",
            float: "right",
          }}
        >
          <p style={{ textAlign: "center" }}>
            University Visvesvaraya College of Engineering (UVCE) was
            established in the year 1917 by Bharat Ratna Sir M Visvesvaraya.
            Currently affiliated to Bangalore University, the College provides
            six engineering courses – Electronics and Communication, Electrical
            and Electronics, Mechanical, Computer Science, Information Science
            and Civil Engineering.
          </p>
          <img
            src="https://uvce.ac.in/img/UVCE/uvce_vector.png"
            style={{ width: "40%" }}
          />
        </div>

        <div className="pics">
          <div>
            <h1>The Team behind all of this</h1>
          </div>
          <div className="team">
            <img src="https://www.icipbangalore.org/images/rlk1.jpg" />
            <img src="https://www.icipbangalore.org/images/Agrawal_Dharma.jpg" />
            <img src="https://www.icipbangalore.org/images/vidyasagar.jpg" />
            <img src="https://www.icipbangalore.org/images/lmp.jpg" />
            <img src="https://www.icipbangalore.org/images/vkr.jpg" />
            <img src="https://www.icipbangalore.org/images/iyengar.png" />
            <img src="https://www.icipbangalore.org/images/palaniswamy.jpg" />
            <img src="https://www.icipbangalore.org/images/rajkumar5.png" />
          </div>
        </div>
        <style jsx>{`
          .banner {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            height: 30vh;
          }
          .aboutCALL {
            position: absolute;
            top: 0;
            margin-top: 12vh;
            width: 100%;
            background-color: lightgray;
            color: white;
            box-shadow: 2px 2px 10px 5px rgba(220, 220, 220, 0.6);
            text-align: center;
          }
          .pics {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            width: ${wWidth > 560 ? "80vw" : "100vw"};
            padding-top: 100px;
          }
          .pics h1 {
            padding-bottom: 50px;
            font-size: ${wWidth > 560 ? "45px" : "18px"};
            width: 100%;
            color: grey;
          }
          .team {
            display: flex;
            align-items: center;
            justify-content: space-around;
            flex-wrap: wrap;
            width: ${wWidth > 560 ? "80vw" : "100vw"};
          }
          .team img {
            width: 25%;
            height: 35vh;
          }
        `}</style>
      </div>
    </SBLayout>
  );
}
