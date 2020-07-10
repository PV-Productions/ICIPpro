import React from "react";
import Link from "next/link";

export default function Committee() {
  const [wWidth, setwWidth] = React.useState(0);
  React.useEffect(() => {
    setwWidth(window.innerWidth);
  });
  return (
    <div
      className="wrapper"
      style={{ width: wWidth > 560 ? "80vw" : "100vw", float: "right" }}
    >
      <h1
        className="header"
        style={{ fontSize: wWidth > 560 ? "72px" : "48px" }}
      >
        Committees
      </h1>
      <hr />
      <div className="textC">
        <h1>Advisory Committee</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
            marginTop: "35px",
          }}
        >
          <img
            src="https://www.icipbangalore.org/images/rlk1.jpg"
            style={{
              width: wWidth > 560 ? 200 : 150,
              height: wWidth > 560 ? 200 : 150,
            }}
          />
          <img
            src="https://scontent.fblr2-1.fna.fbcdn.net/v/t1.0-9/15232344_1102667536497583_4762469246346267304_n.jpg?_nc_cat=109&_nc_sid=9267fe&_nc_ohc=LJV0PGrFiZ0AX8Jika5&_nc_ht=scontent.fblr2-1.fna&oh=4372cc1f30475878b29c82ee9ff1565f&oe=5F1FD7EA"
            style={{
              width: wWidth > 560 ? 200 : 150,
              height: wWidth > 560 ? 200 : 150,
            }}
          />
          <img
            src="https://wie-ils2019.ieeebangalore.org/images/team/Keshav.jpg"
            style={{
              width: wWidth > 560 ? 200 : 150,
              height: wWidth > 560 ? 200 : 150,
            }}
          />
        </div>
        <p style={{ width: "100%" }}>
          R L Kashyap Purdue University,
          <br /> USA N R Shetty Chancellor, Central University of Karnataka,
          <br /> India Keshav Bapat Chairman , IEEE Bangalore Section, India
        </p>
        <hr />

        <h1>Conference Chair</h1>
        <img
          src="https://dese.iisc.ac.in/wp-content/uploads/2016/09/f_90.jpg"
          style={{
            width: wWidth > 560 ? 290 : 200,
            height: wWidth > 560 ? 250 : 180,
            marginTop: "35px",
          }}
        />
        <p>
          L M Patnaik Adjunct Professor and INSA Senior Scientist, NIAS, India
        </p>
        <hr />

        <h1>Technical Program Chairs</h1>
        <p>
          S S Iyengar Florida International University, USA iyengar@cis.fiu.edu
          Rajkumar Buyya University of Melbourne, Australia
          rbuyya@unimelb.edu.au
        </p>

        <hr />
        <h1>Publication Chair</h1>
        <p>
          Venugopal K R Vice Chancellor Bangalore University Bangalore, India
          venugopalkr@gmail.com
        </p>
        <hr />
        <h1>Finance Chair</h1>
        <p>P Deepa Shenoy, UVCE, Bangalore J Thriveni, UVCE, Bangalore</p>
        <hr />
        <h1>Programme Committee</h1>
        <Link href="/nav/pc">
          <button
            className="butt"
            style={{
              fontSize: wWidth > 560 ? "20px" : "12px",
              padding: wWidth > 560 ? "20px 40px" : "12px 30px",
            }}
          >
            Click here to view the list of members
          </button>
        </Link>

        <hr />
        <h1>Organizing Committee</h1>
        <p>
          P Deepa Shenoy, UVCE, Bangalore K B Raja, UVCE, Bangalore K Suresh
          Babu, UVCE, Bangalore Vibha Lakshmikantha, BIT, Bangalore S H Manjula,
          UVCE, Bangalore D N Sujatha, BMSCE, Bangalore J Thriveni, UVCE,
          Bangalore Anita Kanavalli, MSRIT, Bangalore Shaila K, VKIT, Bangalore
          Prashanth C R, VeIT, Bangalore Ramachandra A C, ACE, Bangalore
          Srikantaiah K C, SJBIT, Bangalore T Shiva Prakash, VVIT, Bangalore
          Viswanath Hullipalad , SaIT, Bangalore Vidya A, VKIT, Bangalore Kiran
          K, UVCE, Bangalore
        </p>
        <hr />

        <h1>Tutorial Chair</h1>
        <p>Sujatha D N, BMSCE, Bangalore Arunalatha J S, UVCE, Bangalore</p>

        <hr />
        <h1>Local Arrangement Chair</h1>
        <p>K B Raja, UVCE, Bangalore</p>
        <hr />

        <h1>Co-ordinators</h1>
        <p>
          Shaila K, VKIT, Bangalore Srikantaiah K C, SJBIT, Bangalore Santosh
          Pattar, UVCE, Bangalore
        </p>
        <hr />
      </div>
      <style jsx>
        {`
          .wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            height: auto;
            flex-wrap: wrap;
            margin-top: 12vh;
            text-align: center;
          }
          .header {
            width: 100%;

            background-color: lightgray;
            color: white;
            box-shadow: 2px 2px 10px 5px rgba(220, 220, 220, 0.5);
          }
          .textC {
            width: 100%;
            padding: 50px;
          }
          .textC p {
            width: 70%;
            text-align: left;
          }
          .textC h1 {
            text-align: left;
          }
          img {
            border-radius: 50%;
            box-shadow: 1px 1px 10px grey;
          }
          .butt {
            background-color: rgb(178, 34, 34);
            padding: 20px 40px;
            outline: none;
            border: none;
            color: white;
            font-size: 20px;
            margin: 40px;
            border-radius: 5px;
            text-decoration: none;
          }
        `}
      </style>
    </div>
  );
}
