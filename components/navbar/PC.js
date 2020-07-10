import React from "react";

export default function PC() {
  const [wWidth, setwWidth] = React.useState(0);
  React.useEffect(() => {
    setwWidth(window.innerWidth);
  });
  return (
    <div
      className="wrapper"
      style={{ width: wWidth > 560 ? "80vw" : "100vw", float: "right" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
          height: "50vh",
        }}
      >
        <h1
          style={{
            width: "80vw",
            textAlign: "center",
            fontSize: wWidth > 560 ? "50px" : "30px",
          }}
        >
          List of Programme Committees
        </h1>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <b>David Kahaner</b>,AIIP, Japan
          </li>
          <li>
            <b>P Sreenivas Kumar</b>, IITM, India
          </li>
          <li>
            <b>Sajal K Das</b>, UTA, USA
          </li>
          <li>
            <b>Sharad Purohit</b>, CDAC, India
          </li>
          <li>
            <b>K Sivarajan</b>, Tejas Networks, India
          </li>
          <li>
            <b>Kentaro Toyama</b>, Microsoft, India
          </li>
          <li>
            <b>Vittal Rao</b>, NSF, USA
          </li>
          <li>
            <b>Ravikiran A</b>, IEEE Region 10
          </li>
          <li>
            <b>B P Sinha</b>, ISI, Kolkataka, India
          </li>
          <li>
            <b>Rammohanrao Kotagiri</b>, Australia
          </li>
          <li>
            <b>Rajeev Shorey</b>, General Motors, India
          </li>
          <li>
            <b>Asok K Talukdar</b>, IIIB, India
          </li>
          <li>
            <b>Dinesh K Anvekar</b>, Honeywell, India
          </li>
          <li>
            <b>Bhanu Prasad</b>, Florida, USA
          </li>
          <li>
            <b>M Srinivas</b>, Mentor Graphics, India
          </li>
          <li>
            <b>Rajib Mall</b>, IIT Kharagpur, India
          </li>
          <li>
            <b>Bharat Jayaraman</b>, UB, USA
          </li>
          <li>
            <b>Bindhumadhav</b>, IEEE Bangalore Section
          </li>
          <li>
            <b>J Mohan Kumar</b>, UTA, USA
          </li>
          <li>
            <b>Y V S Laxmi</b>, CDoT, India
          </li>
          <li>
            <b>Tomio Hirata</b>, Japan
          </li>
          <li>
            <b>Takao Nishizeki</b>, Japan
          </li>
          <li>
            <b>G Shivakumar</b>, IIT Mumbai,India
          </li>
          <li>
            <b>P Raveendran</b>, University of Malaya
          </li>
          <li>
            <b>Chandrashekaran K</b>, NITK, India
          </li>
          <li>
            <b>Sneha Kasera</b>, University of Utah
          </li>
          <li>
            <b>Bhabani P Sinha</b>, ISI, Kolkata, India
          </li>
          <li>
            <b>Francis Lau</b>, University of Hong Kong
          </li>
          <li>
            <b>P Ramaswamy</b>, University of Essex, UK
          </li>
          <li>
            <b>Nalini V</b>, University of Illinois, USA
          </li>
          <li>
            <b>Suresh M</b>, University of York, UK
          </li>
          <li>
            <b>Teo Yong M</b>,Nat. Uni. of Singapore
          </li>
          <li>
            <b>G Santhosh Kumar</b>, CUSAT, Cochin
          </li>
        </ul>
      </div>
      <style jsx>
        {`
          ul li {
            padding: 10px;
          }
        `}
      </style>
    </div>
  );
}
