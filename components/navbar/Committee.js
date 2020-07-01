import React from "react";

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
            style={{ width: 200, height: 200 }}
          />
          <img
            src="https://scontent.fblr2-1.fna.fbcdn.net/v/t1.0-9/15232344_1102667536497583_4762469246346267304_n.jpg?_nc_cat=109&_nc_sid=9267fe&_nc_ohc=LJV0PGrFiZ0AX8Jika5&_nc_ht=scontent.fblr2-1.fna&oh=4372cc1f30475878b29c82ee9ff1565f&oe=5F1FD7EA"
            style={{ width: 200, height: 200 }}
          />
          <img
            src="https://wie-ils2019.ieeebangalore.org/images/team/Keshav.jpg"
            style={{ width: 200, height: 200 }}
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
          src="https://lh3.googleusercontent.com/proxy/99ETLyAawosswx_CbjYrmREG39QaIS9YX6wbqX3QiP2tjtxRcw4svDUkM5QdzgsZpg9lJ0RnvuQHif0og4FyePts-LaF24kbRqjHK7hmHeg"
          style={{ width: 290, height: 250, marginTop: "35px" }}
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
        <p>
          David Kahaner,AIIP, Japan P Sreenivas Kumar, IITM, India Sajal K Das,
          UTA, USA Sharad Purohit, CDAC, India K Sivarajan, Tejas Networks,
          India Kentaro Toyama, Microsoft, India Vittal Rao, NSF, USA Ravikiran
          A, IEEE Region 10 B P Sinha, ISI, Kolkataka, India Rammohanrao
          Kotagiri, Australia Rajeev Shorey, General Motors, India Asok K
          Talukdar, IIIB, India Dinesh K Anvekar, Honeywell, India Bhanu Prasad,
          Florida, USA M Srinivas, Mentor Graphics, India Rajib Mall, IIT
          Kharagpur, India Bharat Jayaraman, UB, USA Bindhumadhav, IEEE
          Bangalore Section J Mohan Kumar, UTA, USA Y V S Laxmi, CDoT, India
          Tomio Hirata, Japan Takao Nishizeki, Japan G Shivakumar, IIT
          Mumbai,India P Raveendran, University of Malaya Chandrashekaran K,
          NITK, India Sneha Kasera, University of Utah Bhabani P Sinha, ISI,
          Kolkata, India Francis Lau, University of Hong Kong P Ramaswamy,
          University of Essex, UK Nalini V, University of Illinois, USA Suresh
          M, University of York, UK Teo Yong M,Nat. Uni. of Singapore G Santhosh
          Kumar, CUSAT, Cochin
        </p>
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
        `}
      </style>
    </div>
  );
}
