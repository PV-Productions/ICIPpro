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
          <p>
            Bangalore is the capital and the largest city of the Indian state of
            Karnataka. It is also called "Garden City" for its beautiful
            gardens, flowers and trees which flourish in each and every street.
            It is India's fifth largest city and India's fifth largest
            metropolitan area, with a 2001 population of about 6.5 million.
          </p>
          <img
            src="https://uvce.ac.in/img/UVCE/uvce_vector.png"
            style={{ width: "40%" }}
          />
        
          <div>
        <div
          className="mapouter"
          style={{ width: wWidth > 560 ? "80vw" : "100vw", float: "right" }}
        >
          <div className="gmap_canvas">
            <iframe
              width={wWidth}
              height="500"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=UVCE&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
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
          `}
        </style>
      </div>
    </SBLayout>
  );
}
