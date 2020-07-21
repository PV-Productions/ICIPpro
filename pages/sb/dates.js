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
          Important Dates
        </h1>

        <div>
          <div style={{ overflowX: "auto", margin: "80px" }}>
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
              font-family: "Montserrat", sans-serif;
              box-shadow: 2px 2px 10px 5px rgba(220, 220, 220, 0.5);
            }
            p {
              font-weight: bold;
              width: 95%;
              margin: 30px;
            }
            table {
              border-collapse: collapse;
              width: 100%;
            }

            th,
            td {
              text-align: left;
              padding: 8px;
            }
            tr:nth-child(even) {
              background-color: #f2f2f2;
            }
          `}
        </style>
      </div>
    </SBLayout>
  );
}
