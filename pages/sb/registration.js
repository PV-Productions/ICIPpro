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
        style={{ width: wWidth > 560 ? "100vw" : "100vw", float: "right" }}
      >
        <h1
          className="headerV"
          style={{
            fontSize: wWidth > 560 ? "72px" : "48px",
            position: "absolute",
            top: "50%",
          }}
        >
          To be Updated
        </h1>

        <style jsx>
          {`
            .wrapperVEN {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-wrap: wrap;
              margin-top: 11vh;
            }
            .headerV {
              width: 100%;
              font-size: 72px;
              text-align: center;
              background-color: #800000;
              color: white;

              box-shadow: 2px 2px 10px 5px rgba(220, 220, 220, 0.5);
            }
            p {
              width: 95%;
              margin: 30px;
              text-indent: 35px;
            }
            table,
            th,
            td {
              border: 1px solid black;
              padding: 3px;
            }
          `}
        </style>
      </div>
    </SBLayout>
  );
}
