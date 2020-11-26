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
          style={{ fontSize: wWidth > 560 ? "72px" : "48px" }}
        >
          Registration
        </h1>
        <div
          style={{
            width: wWidth > 560 ? "100vw" : "100vw",
            float: "right",
          }}
        >
          <p>
            The submission of Camera Ready Copy and Registration is on or before
            15th November 2019 (Hard Deadline- No extensions will be provided).
            Do not wait for till the last day and complete the registration
            process as soon as possible.
            <br />
            <br /> The registration details are as shown in the table and the
            payment option is through wired transfer or net banking only.
            Registration Fee includes Author Kit (Bag), Softcopy of Proceedings
            provided by the IEEE, Lunch, Tea, Coffee, Banquet dinner.
          </p>
        </div>

        <h1 style={{ width: "100%", margin: "40px" }}>Registration fees</h1>

        <div>
          <div style={{ overflowX: "auto" }}>
            <table>
              <tr>
                <th>Category</th>
                <th>Amount</th>
              </tr>
              <tr>
                <td>Non-IEEE Authors</td>
                <td>8,000 (INR)</td>
              </tr>
              <tr>
                <td>IEEE Authors</td>
                <td>6,000 (INR)</td>
              </tr>
              <tr>
                <td>Non-IEEE Student Authors</td>
                <td>5,000 (INR)</td>
              </tr>
              <tr>
                <td>IEEE Student Authors</td>
                <td>4,000 (INR)</td>
              </tr>
              <tr>
                <td>Co-Author(s)</td>
                <td>4,000 (INR)</td>
              </tr>
              <tr>
                <td>Listeners/Delegates</td>
                <td>5,000 (INR)</td>
              </tr>
              <tr>
                <td>Foreign Authors</td>
                <td>250 (USD)</td>
              </tr>
            </table>
          </div>
        </div>
        <h1
          style={{
            width: "100%",
            margin: "40px",
          }}
        >
          Bank details are :
        </h1>
        <div>
          <div style={{ overflowX: "auto" }}>
            <table>
              <tr>
                <th>Bank Name</th>
                <th>
                  Canara Bank, Town Hall Branch, No. 51, Stock Exchange
                  Building, Bangalore - 560027
                </th>
              </tr>
              <tr>
                <td>Beneficiary Account Name</td>
                <td>CPCT, Bangalore, India.</td>
              </tr>
              <tr>
                <td>Account Number</td>
                <td>0413101503951</td>
              </tr>
              <tr>
                <td>SWIFT/IFSC Code</td>
                <td> CNRB0000413</td>
              </tr>
            </table>
          </div>
        </div>
        <h3 style={{ margin: "70px", fontWeight: "200" }}>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeLiarqHW8whLpm7qM_V6ObnxN7PlYrJ0pK3h3mtQmS6-G--w/viewform"
            target="_blank"
          >
            Online Registration Link{" "}
          </a>{" "}
          (Please pay the requisite fee before online registration)
        </h3>
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
              background-color: lightgreen;
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
