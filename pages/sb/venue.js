import React from "react";
import SBLayout from "../../components/SBLayout";
import Head from "next/head";
export default function venue() {
  const [wWidth, setwWidth] = React.useState(0);
  React.useEffect(() => {
    setwWidth(window.innerWidth);
  });
  return (
    <SBLayout>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div
        className="wrapperVEN"
        style={{ width: wWidth > 560 ? "80vw" : "100vw", float: "right" }}
      >
        <h1
          className="headerV"
          style={{ fontSize: wWidth > 560 ? "72px" : "48px" }}
        >
          Venue
        </h1>
        <div className="textV">
          <h1>Venue Information (Bangalore, Bangaluru)</h1>
          <br />
          <br />
          <div className="contact">
            <img
              src="https://uvce.ac.in/img/UVCE/uvce_vector.png"
              style={{ width: "40%" }}
            />
            <div style={{ width: wWidth > 560 ? "50%" : "100vw" }}>
              <h2>Address</h2>
              <br />
              <p>
                Address: Department of Computer Science and Engineering,
                University Visvesvaraya College of Engineering, Bangalore
                University, Bengaluru - 560 001.
              </p>
            </div>
          </div>

          <div>
            <div
              className="mapouter"
              style={{ width: wWidth > 560 ? "80vw" : "100vw", float: "right" }}
            >
              <div
                className="gmap_canvas"
                style={{
                  width: wWidth > 560 ? "80vw" : "100vw",
                  float: "right",
                }}
              >
                <iframe
                  width={wWidth}
                  height="500"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=UVCE&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <style jsx>
          {`
            .wrapperVEN {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-wrap: wrap;
              margin-top: 12vh;
            }
            .headerV {
              width: 100%;
              font-size: 72px;
              text-align: center;
              background-color: lightgray;
              color: white;
              box-shadow: 2px 2px 10px 5px rgba(220, 220, 220, 0.5);
            }
            .textV {
              width: 70%;
              margin-top: 50px;
            }
            .textV h1 {
              font-size: 36px;
            }
            .textV p {
              font-size: 20px;
            }
            .contact {
              display: flex;
              margin-bottom: 50px;
              justify-content: space-between;
              flex-wrap: wrap;
            }
          `}
        </style>
      </div>
    </SBLayout>
  );
}
