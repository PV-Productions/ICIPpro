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
          <h1>City Information (Bangalore, Bangaluru)</h1>
          <br />
          <br />
          <p>
            Bangalore is the capital and the largest city of the Indian state of
            Karnataka. It is also called "Garden City" for its beautiful
            gardens, flowers and trees which flourish in each and every street.
            It is India's fifth largest city and India's fifth largest
            metropolitan area, with a 2001 population of about 6.5 million.
          </p>

          <p>
            After India gained independence in 1947, Bangalore evolved into a
            manufacturing hub for heavy industries such as Hindustan Aeronautics
            Limited and Indian Space Research Organization. Within the last
            decade, the establishment and success of high technology firms in
            Bangalore have lead to the growth of Information Technology (IT) in
            India. IT firms in Bangalore employ about 30% of India's pool of 1
            million IT professionals.
          </p>

          <p>
            The city is also the Training Center for the Indian Air Force, the
            Madras Engineering Group (MEG) and Central Military Police, the
            latter two being arms of the Indian Army. Bangalore is the
            scientific hub of India and it has the world renowned and the oldest
            Research University, Indian Institute of Science. The other research
            institutes are the Indian Institute of Astrophysics, the Raman
            Research Institute, the Jawaharlal Nehru Centre for Advanced
            Scientific Research, the National Center for Biological Science and
            the Indian Statistical Institute.
          </p>
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
